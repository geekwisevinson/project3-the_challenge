import {API_URL} from '../../../config';

export default (context,data)=>{


	return context.http.post(API_URL+'users/sign-up',data);
};

