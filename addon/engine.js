import Engine from 'ember-engines/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';

const modulePrefix = 'source-code-editor'

const Eng = Engine.extend({
  modulePrefix: modulePrefix,
  Resolver
});

loadInitializers(Eng, modulePrefix);

export default Eng;
