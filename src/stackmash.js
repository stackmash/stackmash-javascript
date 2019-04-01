/**
 * Stackmash JavaScript API
 * v1.1.0
 * 
 * Copyright (c) 2019 Stackmash
 * 
 * The MIT License
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
 */

var Stackmash = function(key, config = {'showBrowser': false, 'showOs': false})
{
	this.url = 'https://api.stackmash.com/api/notification/create';

	this.key = key;

	this.config = config;

	this.action = function(category, title, body)
	{
		var payload = {
			"public_key": this.key,
			"category": category,
			"title": title,
			"body": JSON.stringify(body),
			"browser": this.getBrowser(),
			"os": this.getOs()
		};

		this.post(payload);
	}

	this.post = function(payload)
	{
		const Http = new XMLHttpRequest();

		Http.open("POST", this.url + "?token=" + this.generateToken(), true);
		Http.setRequestHeader("Accept", "application/json");
		Http.setRequestHeader("Content-Type", "application/json");
		Http.send(JSON.stringify(payload));

		Http.onreadystatechange = function()
		{
			if(Http.status != 201)
			{
				console.error(JSON.parse(Http.responseText));

				return false;
			}

			return JSON.parse(Http.responseText);
		}
	}

	this.generateToken = function()
	{
		return Math.random().toString(36).replace('0.', '');
	}

	this.getBrowser = function()
	{
		if(!this.config.showBrowser)
			return '';

		if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)
			return 'Opera';

		if(typeof InstallTrigger !== 'undefined')
			return 'Firefox';

		if(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)))
			return 'Safari';

		if(/*@cc_on!@*/false || !!document.documentMode)
			return 'Internet Explorer';

		if(!isIE && !!window.StyleMedia)
			return 'Edge';

		if(!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime))
			return 'Chrome';

		if((isChrome || isOpera) && !!window.CSS)
			return 'Blink';
	}

	this.getOs = function()
	{
		if(!this.config.showOs)
			return '';

		if(navigator.appVersion.indexOf("Win") != -1)
			return "Windows";

		if(navigator.appVersion.indexOf("Mac") != -1)
			return "MacOS";
	
		if(navigator.appVersion.indexOf("X11") != -1)
			return "UNIX";

		if(navigator.appVersion.indexOf("Linux") != -1)
			return "Linux";

		return "";
	}
}

module.exports = Stackmash;