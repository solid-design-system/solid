import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Drawer',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3000-10344&t=JCsisVFNkWSlhSSN-4'
    },
    chromatic: { disableSnapshot: true }
  },
  decorators: [
    (story: any) =>
      html` <style>
          #anchor--templates-drawer--default .innerZoomElementWrapper {
            background-color: #ecf0f9;
            min-height: 1000px;
          }
        </style>
        ${story()}`
  ] as unknown
};

/**
 * ### Tablet Navigation
 *
 * When consuming sd-header please ensure that there are no margins applied on the left, right and bottom of the dropdown. The top margin of the dropdown should be kept otherwise the first navigation item is cutted.
 */

export const Default = {
  name: 'Tablet Navigation',
  render: () => html`
    <style>
      sd-navigation-item::part(content) {
        display: flex;
        align-items: center;
      }
      sd-drawer::part(panel) {
        border-top: 2px solid #e9e9e9;
        border-right: 2px solid #e9e9e9;
      }
      sd-drawer::part(overlay) {
        background-color: #051530;
        opacity: 0.9;
      }
      sd-drawer::part(body) {
        padding: 4px 0;
      }
    </style>
    <sd-button onclick="openDrawer()">Open Drawer</sd-button>
    <sd-drawer open placement="end" label="First drawer">
      <sd-button slot="header" variant="tertiary" class="hidden" id="return-button" onclick="handleSecondLevel()">
        <sd-icon name="system/arrow-left" label="return"></sd-icon>
      </sd-button>
      <div class="level-one h-full flex flex-col justify-between">
        <nav aria-label="Primary">
          <sd-navigation-item vertical>Home</sd-navigation-item>
          <sd-navigation-item vertical current chevron divider onclick="handleSecondLevel()">
            About Us
          </sd-navigation-item>
          <sd-navigation-item vertical chevron divider>Markets</sd-navigation-item>
          <sd-navigation-item vertical chevron divider>Press service</sd-navigation-item>
          <sd-navigation-item vertical chevron divider>Sustainability</sd-navigation-item>
          <sd-navigation-item vertical chevron divider>Career</sd-navigation-item>
        </nav>
        <nav aria-label="Secondary" slot="footer" class="bg-neutral-100">
          <sd-navigation-item vertical class="flex align-center">
            <sd-icon name="system/user" class="text-xl mr-2"></sd-icon>
            My depot
          </sd-navigation-item>
          <sd-navigation-item vertical divider class="flex align-center">
            <sd-icon name="system/lock-locked" class="text-xl mr-2"></sd-icon>
            My application
          </sd-navigation-item>
          <sd-navigation-item vertical divider class="flex align-center">
            <sd-icon name="system/website" class="text-xl mr-2"></sd-icon>
            Our further appearances
          </sd-navigation-item>
        </nav>
      </div>
      <div class="level-two hidden">
        <nav id="level-two-nav" aria-label="About us">
          <sd-navigation-item vertical id="nav-title" size="lg">About Us</sd-navigation-item>
          <sd-navigation-item vertical divider>
            Union Investment for privat customers
            <p slot="description" class="sd-paragraph sd-paragraph--size-sm max-w-[238px]">
              Find out more about us and what we stand for
            </p>
            <div slot="children">
              <sd-navigation-item vertical indented current> Investor protection </sd-navigation-item>
              <sd-navigation-item vertical indented> Distinction </sd-navigation-item>
              <sd-navigation-item vertical indented> Our Management </sd-navigation-item>
            </div>
          </sd-navigation-item>
          <sd-navigation-item vertical>
            Sustainability at Union Investment
            <div slot="children">
              <sd-navigation-item vertical indented> Investor protection </sd-navigation-item>
              <sd-navigation-item vertical indented> Distinction </sd-navigation-item>
              <sd-navigation-item vertical indented> Our Management </sd-navigation-item>
            </div>
          </sd-navigation-item>
          <sd-navigation-item vertical>
            Union Investment Group
            <div slot="children">
              <sd-navigation-item vertical indented> Investor protection </sd-navigation-item>
              <sd-navigation-item vertical indented> Distinction </sd-navigation-item>
              <sd-navigation-item vertical indented> Our Management </sd-navigation-item>
            </div>
          </sd-navigation-item>
        </nav>
      </div>
    </sd-drawer>
    <script>
      function handleSecondLevel() {
        document.querySelector('.level-one').classList.toggle('hidden');
        document.querySelector('.level-two').classList.toggle('hidden');
        document.querySelector('#return-button').classList.toggle('hidden');
      }
      function openDrawer() {
        document.querySelector('sd-drawer').show();
      }
    </script>
  `
};
