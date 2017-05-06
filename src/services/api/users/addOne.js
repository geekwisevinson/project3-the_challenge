import {API_URL} from '../../../config';

let default_params = {
	page: 1,
	pages:1,
	limit: 10,
	offset:0,
	sortBy: 'name',
	order: 'asc',
	populate:[{path: 'user', model: 'User'}],
	search_value:'',
	search_terms: ['user_name'],
};

const addOne = (context,data,passed_params)=>{

	let params = Object.assign({},default_params,passed_params);

	let options =  {
		headers: {
			Authorization: `Bearer ${context.store.getters.getToken}`,
		},
		params,
	};
	return context.http.post(API_URL+'test/users',data,options);
};

export default  addOne;