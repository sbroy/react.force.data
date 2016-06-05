import getDefaultLayout from './getDefaultLayout';
import getCompactLayout from './getCompactLayout';
import getCompactLayoutFieldNames from './getCompactLayoutFieldNames';
import query from './query';
import getByTypeAndId from './getByTypeAndId';

//import SobjContainer from './SobjContainer';
import QueryCounter from './QueryCounter';
import cache from './cache';
import utils from './utils';
import refs from './refs';
import queue from './queue';
import storage from './storage';

import requestWithTypeAndId from './requestWithTypeAndId';

//import forceClient from './react.force.net';

module.exports = {
  getByTypeAndId:getByTypeAndId,
  getDefaultLayout:getDefaultLayout,
  getCompactLayout:getCompactLayout,
  getCompactLayoutFieldNames:getCompactLayoutFieldNames,
  query:query,
//  SobjContainer:SobjContainer,
  QueryCounter:QueryCounter,
  utils:utils,
  requestWithTypeAndId:requestWithTypeAndId
//  forceClient:forceClient
};