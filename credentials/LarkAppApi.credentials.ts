import {
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LarkAppApi implements ICredentialType {
	name = 'larkAppApi';
	displayName = '飞书应用 API';
	documentationUrl = 'https://open.feishu.cn/document/home/index';
	icon = 'file:lark.svg' as Icon;
	properties: INodeProperties[] = [
		{
			displayName: 'App ID',
			name: 'app_id',
			type: 'string',
			default: '',
		},
		{
			displayName: 'App Secret',
			name: 'app_secret',
			type: 'string',
			default: '',
			typeOptions: {
				password: true
			}
		},
	];

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			method: 'POST',
			baseURL: 'https://open.feishu.cn/open-apis/auth/v3',
			url: '/tenant_access_token/internal',
			headers: {
				'Content-Type': 'application/json',
			},
			body: `{"app_id": "={{$credentials.app_id}}","app_secret": "={{$credentials.app_secret}}"}`,
		},
	};
}
