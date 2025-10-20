'use client';

import config from '@/lib/config';
import { cn } from '@/lib/utils';
import { IKImage, IKUpload, IKVideo, ImageKitProvider } from 'imagekitio-next';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Échec de la requête avec le statut ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Échec de l'authentification : ${error.message}`);
    } else {
      throw new Error("Échec de l'authentification : Erreur inconnue");
    }
  }
};

interface Props {
  type: 'image' | 'video';
  accept: string;
  placeholder: string;
  folder: string;
  variant: 'dark' | 'light';
  onFileChange: (filePath: string) => void;
  value?: string;
}

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
  value,
}: Props) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string | null }>({
    filePath: value ?? null,
  });
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const styles = {
    button:
      variant === 'dark'
        ? 'bg-dark-300'
        : 'bg-light-600 border-gray-100 border',
    placeholder: variant === 'dark' ? 'text-light-100' : 'text-slate-500',
    text: variant === 'dark' ? 'text-light-100' : 'text-dark-400',
  };

  const onError = (error: unknown) => {
    console.log(error);
    setIsUploading(false);

    const message =
      error instanceof Error
        ? error.message
        : `Votre ${type} n'a pas pu être téléchargée. Veuillez réessayer.`;

    toast.error(`Échec de téléchargement de ${type} : ${message}`);
  };

  interface UploadResponse {
    filePath: string;
    [key: string]: unknown;
  }

  const onSuccess = (res: unknown) => {
    setIsUploading(false);

    if (res && typeof res === 'object' && 'filePath' in res) {
      const fileRes = res as UploadResponse;
      setFile(fileRes);
      onFileChange(fileRes.filePath);

      toast.success(`${type} téléchargée avec succès ✅  `, {
        icon: (
          <Image
            src='/icons/book.svg'
            alt='success-icon'
            width={20}
            height={20}
            className='object-contain'
          />
        ),
      });
    } else {
      toast.error('Téléchargement réussi mais réponse invalide');
    }
  };

  const onValidate = (file: File) => {
    if (type === 'image') {
      if (file.size > 20 * 1024 * 1024) {
        toast.error('Le fichier est trop volumineux', {
          description: 'Veuillez téléverser une image de moins de 20 Mo.',
        });
        return false;
      }
    } else if (type === 'video') {
      if (file.size > 50 * 1024 * 1024) {
        toast.error('Le fichier est trop volumineux', {
          description: 'Veuillez téléverser une vidéo de moins de 50 Mo.',
        });
        return false;
      }
    }

    return true;
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        validateFile={onValidate}
        onUploadStart={() => {
          setIsUploading(true);
          setProgress(0);
        }}
        onUploadProgress={({ loaded, total }) => {
          const percent = Math.round((loaded / total) * 100);

          setProgress(percent);
        }}
        folder={folder}
        accept={accept}
        className='hidden'
      />
      <button
        className={cn('upload-btn', styles.button, 'cursor-pointer')}
        disabled={isUploading}
        onClick={e => {
          e.preventDefault();

          if (ikUploadRef.current) {
            // @ts-expect-error: ikUploadRef might be null or not typed as HTMLInputElement
            ikUploadRef.current?.click();
          }
        }}
      >
        {isUploading ? (
          <>
            <div className='animate-spin rounded-full h-5 w-5 border-2 border-light-100 border-t-transparent mr-2' />
            <p className='text-base text-light-100'>
              Téléchargement en cours...
            </p>
          </>
        ) : (
          <>
            <Image
              src='/icons/upload.svg'
              alt='upload-icon'
              width={20}
              height={20}
              className='object-contain'
            />
            <p className={cn('text-base', styles.placeholder)}>{placeholder}</p>
          </>
        )}
        {file && !isUploading && (
          <p className={cn('upload-filename', styles.text)}>{file.filePath}</p>
        )}
      </button>

      {progress > 0 && progress !== 100 && (
        <div className='w-full rounded-full bg-green-200'>
          <div className='progress' style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      {file &&
        (type === 'image' ? (
          <IKImage
            alt={file.filePath || 'Uploaded image'}
            path={file.filePath || ''}
            width={500}
            height={300}
          />
        ) : type === 'video' ? (
          <IKVideo
            path={file.filePath || ''}
            controls={true}
            className='h-96 w-full rounded-xl'
          />
        ) : null)}
    </ImageKitProvider>
  );
};

export default FileUpload;
