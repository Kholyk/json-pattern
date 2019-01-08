// @flow
import 'source-map-support/register';
import commandLineCommands from 'command-line-commands';
import format from './format';
import { readFrom, writeTo } from './fshandler';

const { command, argv } = commandLineCommands([null, 'run']);

const config = {
  src: argv[0],
  dest: argv[1],
  com: command,
};

export default () => {
  if (config.com !== 'run') {
    throw console.log('STOP');
  }
  const sourceData = readFrom(config.src);
  writeTo(config.dest, format(JSON.parse(sourceData)));
};
