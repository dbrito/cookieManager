function CookieManager() {
	this.cookie = document.cookie;
	this.set = function(nome, valor, dias) {
		var validade = new Date();
	    validade.setTime(validade.getTime() + (dias*24*60*60*1000));
	    var expires = "expires="+validade.toUTCString();
	    document.cookie = nome + "=" + valor + "; " + expires;
	}
	this.get = function(nome) {
		var cookies = document.cookie.split(';');
		for ( var i in cookies ) {
			if ( cookies[i].indexOf(nome+'=') != -1 ) return cookies[i];
		}
		return false;
	}
	this.remove = function(nome) {
		document.cookie = nome+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
		return (!this.get(nome));
	}
}