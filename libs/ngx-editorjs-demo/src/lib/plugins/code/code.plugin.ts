import { Injectable } from '@angular/core';
import { ToolSettings } from '@editorjs/editorjs';
import Code from '@editorjs/code';
import { EditorJSPlugin } from '@tinynodes/ngx-editorjs';

@Injectable()
export class PluginCode extends EditorJSPlugin {
  static plugin(): ToolSettings {
    return Code;
  }
}
