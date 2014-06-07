Batman.View.store.set('/posts/edit', '<div class=\'row\'>\n  <h1 class=\'col-sm-12\'>\n    Edit Post\n  </h1>\n</div>\n<div data-partial=\'posts/form\'>\n</div>');
Batman.View.store.set('/posts/form', '<form data-formfor-post=\'post\' data-event-submit=\'savePost | withArguments post\'>\n  <div class=\'errors alert alert-warning\' data-showif=\'post.errors.length\'>\n  </div>\n  <div class=\'form-group\'>\n    <label>Title</label>\n    <input type=\'text\' class=\'form-control\' data-bind=\'post.title\' />\n  </div>\n  <div class=\'form-group\'>\n    <label>Content</label>\n    <textarea class=\'form-control\' data-bind=\'post.content\'></textarea>\n  </div>\n  <div class=\'form-group\'>\n    <input type=\'submit\' class=\'btn btn-primary\' value=\'Save\' />\n    <a class=\'btn btn-danger\' data-route=\'routes.posts\'>Cancel</a>\n  </div>\n</form>');
Batman.View.store.set('/posts/index', '<div class=\'row\'>\n  <h1 class=\'col-sm-12\'>\n    <span data-bind=\'\"Post\" | pluralize posts.length\'></span>\n  </h1>\n</div>\n<ul class=\'list-unstyled\'>\n  <li data-foreach-post=\'posts\'>\n    <div class=\'row\'>\n      <a data-route=\'routes.posts[post]\'>\n        <p class=\'lead col-sm-4\' data-bind=\'post.title\'></p>\n      </a>\n      <div class=\'col-sm-2\'>\n        <a data-showif=\'post.isOwnedByCurrentUser\' class=\'btn btn-warning pull-right\' data-route=\'routes.posts[post].edit\'>Edit</a>\n      </div>\n      <div class=\'col-sm-2\'>\n        <a data-showif=\'post.isOwnedByCurrentUser\' class=\'btn btn-danger pull-right\' data-event-click=\'destroyPost | withArguments post\'>Delete</a>\n      </div>\n      <span class=\'text-muted col-sm-4\'>\n        Posted on\n        <span data-bind=\"post.createdAtFormatted\"></span>\n      </span>\n    </div>\n    <div class=\'row\'>\n      <p class=\'col-sm-12\' data-bind=\'post.content | truncate 100\'></p>\n    </div>\n  </li>\n</ul>\n<div class=\'row\' data-showif=\'isAdmin\'>\n  <div class=\'col-sm-2\'>\n    <a class=\'btn btn-default\' data-route=\'routes.posts.new\'>New Post</a>\n  </div>\n</div>');
Batman.View.store.set('/posts/new', '<div class=\'row\'>\n  <h1 class=\'col-sm-12\'>\n    New Post\n  </h1>\n</div>\n\n<div data-partial=\'posts/form\'>\n</div>');
Batman.View.store.set('/posts/show', '<div class=\'row\'>\n  <div class=\'col-sm-12\'>\n    <h1 class=\'page-header\'>\n      <span data-bind=\'post.title\'></span>\n      <small data-bind=\'post.createdAtFormatted\'></small>\n    </h1>\n  </div>\n</div>\n\n<div class=\'row\'>\n  <p class=\'col-sm-12\' data-bind=\'post.content\'></p>\n</div>\n\n<div class=\'row\'>\n  <div class=\'col-sm-12\'>\n    <h3> Comments </h3>\n  </div>\n</div>\n\n<div class=\'row\'>\n  <ul class=\'list-unstyled\'>\n\n    <!-- render comments: -->\n    <li data-foreach-comment=\'post.comments\' >\n      <p class=\'col-sm-4\'>\n        <strong class=\'pull-right\'>\n          On <span data-bind=\'comment.createdAtFormatted\'></span>, <span data-bind=\'comment.created_by_username\'></span> said:\n        </strong>\n      </p>\n      <p class=\'col-sm-6\' data-bind=\'comment.content\'></p>\n      <div class=\'col-sm-2\' data-showif=\'comment.canBeDeleted\'>\n        <a class=\'btn btn-danger btn-xs\' data-event-click=\'destroyComment | withArguments comment\'> Delete </a>\n      </div>\n    </li>\n    <!-- \"design\" for empty state -->\n    <li class=\'col-sm-12\' data-showif=\'post.comments.isEmpty\'>\n      <p class=\'text-muted\'>No comments yet!</p>\n    </li>\n  </ul>\n</div>\n\n<div class=\'row\' data-showif=\'loggedOut\'>\n  <div class=\'col-sm-12\'>\n    <div class=\'well\'>\n      <p>You must be <a data-event-click=\'login\'>logged in</a> to leave a comment!</p>\n    </div>\n  </div>\n</div>\n\n<div class=\'row\' data-showif=\'loggedIn\'>\n  <div class=\'col-sm-12\'>\n    <form data-formfor-comment=\'newComment\' data-event-submit=\'saveComment | withArguments newComment\'>\n      <div class=\'form-group\'>\n        <label>New Comment:</label>\n        <textarea\n          class=\'form-control\'\n          data-bind=\'newComment.content\'\n          data-bind-placeholder=\'\"Leave a comment as \" | append currentUser.username | append \"...\"\'\n          >\n        </textarea>\n      </div>\n      <input type=\'submit\' class=\'btn btn-primary\' value=\'Leave a comment\' />\n    </form>\n  </div>\n</div>');