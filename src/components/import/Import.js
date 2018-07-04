import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Act from 'actions';
import './Import.styl';
// import Siderpanel from 'components/siderpanel';

import { Steps, Upload, message, Button, Icon, Progress } from 'antd';
const Step = Steps.Step;

const dataList = {
  manage: {
    downloadTemplateUrl: '/fee/record/upload/template',  //下载模板
    uploadExcelUrl: '/fee/record/upload/excel', //批量导入
    downloadErrorUrl: '/fee/record/upload/error'  //下载错误记录 https://229492634.miss-xia-property-manage.club
	}
}

class Import extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			current: 0,
			percent: 0,
			resData: {
				// totalCount: 4,
				// errorCount: 3
			},
			status: '',
			msg: ''
		};
	}
	reset = () => {
		this.setState({
			current: 0,
			percent: 0,
			resData: {},
			status: '',
			msg: ''
		})
	};
	getLastUploadResult = () => {
		let dataObj = dataList[this.props.type] || {};
		this.props.dispatch({
			type: Act.UPLOAD_RECORD_METHODS,
			api: 'manage',  //type this.props.type
      params: {},
			cb: (resData) => {
				if (!resData || resData == true) {
					message.info('暂无导入记录')
					return
				}
				let obj = {
					resData: resData
				}
				if (resData.status == 0) {
					Object.assign(obj, {
						status: '',
						current: 1,
						percent: 75,
						msg: '正在导入中...'
					})
				} else {
					Object.assign(obj, {
						status: '',
						current: 2,
						percent: 100,
						msg: `共${resData.totalCount}条数据，成功${resData.totalCount - resData.errorCount}条，失败${resData.errorCount}条`
					})
				}
				this.setState({
					...obj
				})
			}
		})
	}
	onChange = (info) => {
		let obj = {
			percent: info.file.percent
		}
		console.log(info)
		if (info.file.status !== 'uploading') {
			// console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			let response = info.file.response,
				resData = response.data;
			if (info.file.response.result == 100) {
				Object.assign(obj, {
					status: '',
					current: 2,
					resData: resData,
					msg: `共${resData.totalCount}条数据，成功${resData.totalCount - resData.errorCount}条，失败${resData.errorCount}条`
				})
			} else {
				Object.assign(obj, {
					status: 'exception',
					current: 2,
					resData: {},
					msg: '导入异常：' + response.message
				})
			}
		} else if (info.file.status === 'error') {
		}
		this.setState({ ...obj })
	}
	render() {
		let { current, res, resData, msg, status } = this.state;
		let dataObj = dataList[this.props.type] || {};
		let uploadProps = {
			// action: '/contract/upload/excel.rjson',
			action: dataObj.uploadExcelUrl,
			onChange: this.onChange,
			method: 'POST',
			beforeUpload: () => {
				this.setState({
					current: 1
				})
			}
		}
		let ProgressStatus = {};
		if (status) {
			ProgressStatus.status = status
		}
		return (
			  <div className="pageImport fff main">
				<div className="container">
					<Steps current={current}>
						<Step title="选择文件" description="" />
						<Step title="正在处理" description="" />
						<Step title="导入结果" description="" />
					</Steps>

					<div className={'content ' + (current == 0 ? '' : 'hide')}>
						{/* <form action={'/contract/upload/template.rjson'} method="post" id="form" name="form"> */}
						<form action={dataObj.downloadTemplateUrl} method="post" id="form" name="form">
							<div className="download">
								<a onClick={() => { $('#download1').click() }}>点击下载模板</a>
								<input type="submit" value="" id="download1" />
							</div>
						</form>
						<div className="uploadWrap">
							<Upload {...uploadProps}>
								<Button>
									<Icon type="upload" /> 点击上传
							</Button>
							</Upload>
						</div>
						<div className="desc">
							<p className="title">导入规则</p>
							<p className="info">
								1、单次导入每个文件最多10000条客户数据，超出请分批导入<br />
								2、不要调整系统给出的导入模板，避免导入出错<br />
								3、点击下方按钮之后，系统会进入到后台进入数据处理，可以关闭当前导入窗口
							</p>
						</div>
						<Button className="mt_20" onClick={this.getLastUploadResult}>查看上次导入结果</Button>
					</div>
					<div className={'content ' + (current != 0 ? '' : 'hide')}>
						<div className="progressWrap center">
							<Progress type="circle" percent={this.state.percent} {...ProgressStatus} />
						</div>
						{
							current == 1 ? (
								<div>
									<p className="progress-title">导入进度</p>
									<p className="progress-desc">数据正在导入中，可以关闭当前页面</p>
								</div>
							) : (
									<div>
										<p className="progress-title">{status ? '导入异常' : '导入完成'}</p>
										<p className="progress-desc">{msg}</p>
										{
											resData.errorCount > 0 && (
												<form action={dataObj.downloadErrorUrl} method="post" id="form" name="form">
													<div className="downloadError">
														<a onClick={() => { $('#downloadError').click() }}>点击下载失败数据</a>
														<input type="submit" value="" id="downloadError" />
													</div>
												</form>
											)
										}
										<div className="center mt_20">
											<Button type="primary" onClick={this.reset}>重新导入</Button>
										</div>
									</div>
								)
						}
					</div>
				</div>
			</div>
    );
	}



	componentWillMount() { }
	componentDidMount() { }
	componentWillReceiveProps(nextProps) { }
	shouldComponentUpdate(nextProps, nextState) { return true; }
	componentWillUpdate(nextProps, nextState) { }
	componentDidUpdate(prevProps, prevState) { }
	componentWillUnmount() { }
}

const mapStateToProps = state => {

	return {
	}
}
export default connect(mapStateToProps)(Import);
