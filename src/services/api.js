import { API_URL , STRIPE_PUB} from '../config';



import users from './api/users';


const Api = {
	init (context, store) {
		this.http = context.http;
		this.store = store;
	},
	get (url, params) {
		let options =  {
			headers: {
				Authorization: `Bearer ${this.store.getters.getToken}`,
			},
			params,
		};
		return this.http.get(API_URL + url, options);
	},
users
};

export default  Api;
