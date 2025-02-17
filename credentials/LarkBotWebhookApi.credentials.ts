import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LarkBotWebhookApi implements ICredentialType {
	name = 'larkBotWebhookApi';
	displayName = '飞书机器人 Webhook API';
	iconUrl = 'https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/eff71c9398c04ebd8452d748646fc1e8.png~tplv-jbbdkfciu3-png:0:0.png';
	documentationUrl = 'https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot';
	properties: INodeProperties[] = [
		{
			displayName: 'Webhook 地址',
			name: 'webhook_url',
			type: 'string',
			default: '',
			typeOptions: {
				password: true
			}
		},
	];
}
