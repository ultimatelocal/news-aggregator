import DS from 'ember-data';
let nextId = 0;

export default DS.RESTSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let customPayload = [];

    //customize response payload to match JSON API specifications on loading in backend store
    if (payload.articles) {
      for (let item of payload.articles) {
        nextId++;
        if (item.urlToImage && item.description && item.content) {
          customPayload.push({
            id: nextId,
            author:      item.author,
            title:       item.title,
            content:     item.content,
            description: item.description,
            publishedAt: item.publishedAt,
            url:         item.url,
            urlToImage:  item.urlToImage
          });
        }
      }

      payload = {
        article: customPayload
      };
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});
