'use client';

import config from '@/lib/config';
import { IKImage, IKUpload, ImageKitProvider } from 'imagekitio-next';
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

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const onError = (error: unknown) => {
    console.log(error);
    setIsUploading(false);

    const message =
      error instanceof Error
        ? error.message
        : "Votre image n'a pas pu être téléchargée. Veuillez réessayer.";

    toast.error(`Échec de téléchargement d'image : ${message}`);
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

      toast.success(`Image téléchargée avec succès ✅  `, {
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

  const onUploadStart = () => {
    setIsUploading(true);
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className='hidden'
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        onUploadStart={onUploadStart}
        fileName='test-upload.png'
      />
      <button
        className='upload-btn cursor-pointer'
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
            <p className='text-base text-light-100'>Télécharger un fichier</p>
          </>
        )}
        {file && !isUploading && (
          <p className='upload-filename'>{file.filePath}</p>
        )}
      </button>
      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={300}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
