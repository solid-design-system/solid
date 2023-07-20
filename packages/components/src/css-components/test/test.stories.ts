import '../../solid-components';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit-html';

export default {
  title: 'CSS-Components/sd-test',
  args: {
    // boolean for "modifier" arg
    blue: false,
    thickness: 'default'
  },
  argTypes: {
    blue: {
      name: 'sd-test--blue',
      control: 'boolean'
    },
    thickness: {
      name: 'sd-test--thickness--...',
      control: 'radio',
      options: ['thin', 'default', 'bold']
    }
  }
};

const getClasses = (args: any) => {
  return {
    'sd-test': true,
    'sd-test--blue': args.blue,
    'sd-test--thickness--thin': args.thickness === 'thin',
    'sd-test--thickness--bold': args.thickness === 'bold'
  };
};

export const Default = {
  render: (args: any) => {
    return html`<div class=${classMap(getClasses(args))}>default</div>`;
  }
};

export const Blue = {
  args: {
    modifier: true
  },
  render: (args: any) => {
    return html`<div class=${classMap(getClasses({ ...args, blue: true }))}>sd--blue</div>`;
  }
};

export const Thickness = {
  args: {
    modifier: true
  },
  render: (args: any) => {
    return html`<div class=${classMap(getClasses({ ...args, thickness: 'thin' }))}>sd--tickness-thin</div>
      <div class=${classMap(getClasses({ ...args, thickness: 'default' }))}>default</div>
      <div class=${classMap(getClasses({ ...args, thickness: 'bold' }))}>sd--tickness-bold</div>`;
  }
};
