import Fetch from '../fetch';
//https://229492634.miss-xia-property-manage.club
export let manage_upload_record = (...arg) => Fetch.post('/fee/record/upload/record', ...arg);
export let manage_login = (...arg) => Fetch.post('/fee/record/user/pc/login', ...arg);
