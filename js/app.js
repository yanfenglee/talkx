$(function(){
	
	// 联系人模型
	var Contact = Backbone.Model.extend({
		
		initialize: function() {
			
		},
		
		defaults: function() {
			return {
				username: "",
				nickname: "",
				sex: "male",
				head: "aa.png",
				desc: "hello, world",
			};
		}
	});
	
	
	// 用户信息模型, 帐号设置信息
	var User = Contact.extend({
		
		initialize: function() {
			
		},
		
		defaults: function() {
			return {
				bg: "bb.png"
			};
		}
	});
	
	

	
	// 联系人集合
	var ContactList = Backbone.Collection.extend({
		model: Contact
	});
	
	
	// 聊天内容
	var ChatContent = Backbone.Model.extend({
		
		initialize: function() {
			
		},
		
		defaults: function() {
			return {
				type: "default",
				msg: "hello, world",
			};
		}
	});
	
	// 聊天内容集合
	var ChatContentList = Backbone.Collection.extend({
		model: ChatContent,
	});
	
	
	// 聊天会话
	var ChatSession = Backbone.Model.extend({
		
		initialize: function() {
			
		},
		
		defaults: function() {
			return {
				username: "",
				chatContents: new ChatContentList()
			};
		}
	});
	
	// 聊天会话集合
	var ChatSessionList = Backbone.Collection.extend({
		model: ChatSession
	});
	
	// 单条聊天内容视图
	var ChatContentView = Backbone.View.extend({
		tagName: "li",
		template: _.template($('$item-tmpl').html()),
		
		// The DOM events specific to an item
		events: {
			"click .contact": "showChat"
		},
		
		// 
		initialize: function() {
			this.listenTo(this.model, 'add', this.render);
			this.listenTo(this.model, 'delete', this.render);
		},
		
		// render
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	
	// 聊天记录视图
	var ChatContentListView = Backbone.View.extend({
		tagName: "li",
		template: _.template($('$item-tmpl').html()),
		
		// The DOM events specific to an item
		events: {
			"click .contact": "showChat"
		},
		
		// 
		initialize: function() {
			this.listenTo(this.model, 'add', this.render);
			this.listenTo(this.model, 'delete', this.render);
		},
		
		// render
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	// 单个会话视图
	var ChatSessionView = Backbone.View.extend({
		tagName: "li",
		template: _.template($('$item-tmpl').html()),
		
		// The DOM events specific to an item
		events: {
			"click .contact": "showChat"
		},
		
		// 
		initialize: function() {
			this.listenTo(this.model, 'add', this.render);
			this.listenTo(this.model, 'delete', this.render);
		},
		
		// render
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	// 会话列表视图
	var ChatSessionListView = Backbone.View.extend({
		tagName: "li",
		template: _.template($('$item-tmpl').html()),
		
		// The DOM events specific to an item
		events: {
			"click .contact": "showChat"
		},
		
		// 
		initialize: function() {
			this.listenTo(this.model, 'add', this.render);
			this.listenTo(this.model, 'delete', this.render);
		},
		
		// render
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	
	// 单个联系人视图
	var ContactView = Backbone.View.extend({
		tagName: "li",
		template: _.template($('$item-tmpl').html()),
		
		// The DOM events specific to an item
		events: {
			"click .contact": "showChat"
		},
		
		// 
		initialize: function() {
			this.listenTo(this.model, 'add', this.render);
			this.listenTo(this.model, 'delete', this.render);
		},
		
		// render
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	// 单个联系人详细视图
	var ContactDetailView = Backbone.View.extend({
		tagName: "li",
		template: _.template($('$item-tmpl').html()),
		
		// The DOM events specific to an item
		events: {
			"click .contact": "showChat"
		},
		
		// 
		initialize: function() {
			this.listenTo(this.model, 'add', this.render);
			this.listenTo(this.model, 'delete', this.render);
		},
		
		// render
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	// 联系人列表视图
	var ContactListView = Backbone.View.extend({
		tagName: "li",
		template: _.template($('$item-tmpl').html()),
		
		// The DOM events specific to an item
		events: {
			"click .contact": "showChat"
		},
		
		// 
		initialize: function() {
			this.listenTo(this.model, 'add', this.render);
			this.listenTo(this.model, 'delete', this.render);
		},
		
		// render
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	// 用户视图
	var UserView = Backbone.View.extend({
		tagName: "li",
		template: _.template($('$item-tmpl').html()),
		
		// The DOM events specific to an item
		events: {
			"click .contact": "showChat"
		},
		
		// 
		initialize: function() {
			this.listenTo(this.model, 'add', this.render);
			this.listenTo(this.model, 'delete', this.render);
		},
		
		// render
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	
	// The Application
	var AppView = BackBone.View.extend({
		el: $("#chatlist"),
		
	});
	
	
	//contacts list instance
	var contacts = new ContactList;
	
	
	
	
});
