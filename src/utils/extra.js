
import { notification } from 'antd';

export const openNotificationWithIcon = ( description, type, title )=> {
  notification[type]({
    message: title,
    description,
  });
};