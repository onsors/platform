/**
 * Module dependecies
 */

var Pattern = require('url-pattern');

/**
 * Render a template
 *
 * @param {String} str
 * @param {Object} vals
 * @return {String} out
 */

function template (str, vals) {
  return str.replace(/(\$\d+)/gm, function(key) {
    return vals[key] || '';
  });
}

/**
 * Match url pattern and rewrite
 *
 * @param {String} pattern
 * @param {String|Object} request fields to rewrite
 * @return {Function} middleware(req, res, next)
 */

function rewrite(pattern, change) {
  
  /**
   * Convert to pattern
   */
  
  pattern = new Pattern(pattern);
  
  /**
   * Handle url for now
   */
  
  if (typeof change === 'string') {
    change = { url: change }
  }
  
  /**
   * Connect-style middleware
   */
  
  return function(req, res, next) {
    
    /**
     * Build full url from request
     */
    
    var url = req.protocol + '://' + req.get('host') + req.originalUrl;
    
    /**
     * Parse url using pattern
     */
    
    var result = pattern.match(url);
    var out = {};
    
    result._ = result._ || [];
    result._.forEach(function(val, index) {
      out['$' + (index + 1)] = val;
    });
    
    Object.keys(result).forEach(function(key) {
      if (key === '_') return;
      out['$' + key] = result[key];
    });
    
    /**
     * Rewrite request keys with new matched values
     */
    
    Object.keys(change).forEach(function(key) {
      req[key] = template(change[key], out);
    });
    
    /**
     * Proceed
     */
    
    next();
  }
}

/**
 * Expose
 */

exports = module.exports = rewrite;