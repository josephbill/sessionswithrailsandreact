if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_sessionmanagementrailsreact_session', domain: 'sessionmanagementrailsreact-json-api.com'
  else
    Rails.application.config.session_store :cookie_store, key: '_sessionmanagementrailsreact_session'
  end
  