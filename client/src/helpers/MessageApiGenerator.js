import { fetchWithoutAuth } from './fetch';
import Swal from 'sweetalert2';

export const MessageApiGenerator = async (messageCallback) => {

  try {
    const response = await fetchWithoutAuth('message');
    const body = await response.json();

    if (body.ok) {
      await messageCallback(body.message);
    } else {
      Swal.fire('Error',body.message + ", Please press stop messages and start message to get new message.",);
    }

  } catch (error) {
    Swal.fire('Error',error.message + ", Please press stop messages and start message to get new message.",);
  }  

};