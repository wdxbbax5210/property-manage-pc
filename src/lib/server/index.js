import Fetch from '../fetch';
//https://229492634.miss-xia-property-manage.club
export let manage_upload_record = (...arg) => Fetch.post('/upload/record', ...arg);
