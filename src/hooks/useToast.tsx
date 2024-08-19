import { useToast as useChakraToast } from '@chakra-ui/react';

import { ToastType } from '@/types';

interface ToastResultProps {
  showToast: (message: string, type?: ToastType) => void;
  handleErrorToast: (error: any) => void;
}

export const useToast = (): ToastResultProps => {
  const toast = useChakraToast();

  const showToast = (message: string, type: ToastType = ToastType.Info) => {
    return toast({
      variant: type,
      status: type,
      title: message,
      isClosable: true,
      position: 'top-right'
    });
  };

  const handleErrorToast = (error: any) => {
    console.log('handle error');
    const errorMessage = 'Application error occured!';

    return toast({
      variant: 'error',
      title: typeof error === 'string' ? error : errorMessage,
      status: ToastType.Error,
      isClosable: true,
      position: 'top-right'
    });
  };

  return { showToast, handleErrorToast };
};
