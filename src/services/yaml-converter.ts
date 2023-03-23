import { parse, stringify } from 'yaml';

export function yamlToJson(yamlString: string, indentation: number = 2) {
  return JSON.stringify(parse(yamlString), null, indentation);
}

export function jsonToYaml(jsonString: string) {
  return stringify(JSON.parse(jsonString));
}
