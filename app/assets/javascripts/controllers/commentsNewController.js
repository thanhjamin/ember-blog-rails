App.CommentsNewController=Ember.ObjectController.extend({
  needs: 'post',
  text: null,
  save: function() {
    var post = this.get('controllers.post.content');
    App.Comment.createRecord({ post: post, text: this.get('text') });
    this.get('target').transitionTo('post.index');
  }
});
