import { notification } from "ant-design-vue";

export const useNotification = () => {
  const showMessage = (message: string, description: string) => {
    notification.destroy();
    notification.open({
      message,
      description,
    });
  };

  return {
    showMessage,
  };
};
