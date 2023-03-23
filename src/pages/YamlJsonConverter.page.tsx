// This is in beta
import { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage.component';
import CodeMirror from '@uiw/react-codemirror';
import { json as codeMirrorJson } from '@codemirror/lang-json';
import { jsonToYaml, yamlToJson } from '../services/yaml-converter';

export default function YamlJsonConverterPage() {
  const [yaml, setYaml] = useState<string>('');
  const [json, setJson] = useState<string>('');
  const [isJsonInvalid, setIsJsonInvalid] = useState<boolean>(false);
  const [isYamlInvalid, setIsYamlInvalid] = useState<boolean>(false);
  useEffect(() => {
    document.title = 'YAML Formatter | dev tools';
  }, []);

  function onChangeJson(e: any, a: any) {
    console.log('onChangeJson', { e, a });
    try {
      setYaml(jsonToYaml(e));
      setIsJsonInvalid(false);
    } catch (error) {
      setIsJsonInvalid(true);
    }
  }

  function onChangeYaml(e: any, a: any) {
    console.log('onChangeYaml', { e, a });
    try {
      setJson(yamlToJson(e));
      setIsYamlInvalid(false);
    } catch (error) {
      setIsYamlInvalid(true);
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8" data-gramm_editor="false">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Yaml / JSON Converter
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Instantly convert YAML and JSON files
          </p>
        </div>
      </div>
      <div className="my-5">
        <div className="my-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="yaml-editor"
              className="block text-sm font-medium text-gray-700"
            >
              Yaml
            </label>
            <div className="mt-1">
              <div className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <CodeMirror
                  id="json-editor"
                  value={yaml}
                  onChange={onChangeYaml}
                  extensions={[codeMirrorJson()]}
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="json-editor"
              className="block text-sm font-medium text-gray-700"
            >
              JSON
            </label>
            <div className="mt-1">
              <div className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <CodeMirror
                  id="json-editor"
                  value={json}
                  onChange={onChangeJson}
                  extensions={[codeMirrorJson()]}
                />
              </div>
            </div>
          </div>
        </div>
        {isJsonInvalid ? (
          <ErrorMessage title="Invalid JSON"></ErrorMessage>
        ) : (
          <></>
        )}
        {isYamlInvalid ? (
          <ErrorMessage title="Invalid YAML"></ErrorMessage>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
