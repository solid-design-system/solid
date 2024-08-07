import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Header'
};
/**
 * Sample of the sd-header
 *
 * ```
 * ```
 */
export const Default = {
  render: () => html`
    <sd-header>
      <div class="flex justify-between items-center">
        <!-- top-left-area start !-->
        <a class="flex flex-shrink" href="#">
          <img class="h-8 md:h-12 lg:h-[56px]" src="images/logo-unioninvestment-lg.svg" alt="Logo" />
        </a>
        <!-- top-left-area end !-->
        <!-- top-right-area start !-->
        <div class="flex lg:hidden">
          <sd-navigation-item>
            <sd-icon name="system/menu" library="global-resources" class="text-xl  -my-[1.5px] -mx-[4px]"></sd-icon>
          </sd-navigation-item>
        </div>
        <!-- top-right-area end !-->
      </div>
      <div class="hidden lg:flex items-end pt-3 justify-between">
        <!-- bottom-left-area start !-->
        <div class="-ml-4">
          <sd-navigation-item><b>Über Uns</b></sd-navigation-item
          ><sd-navigation-item><b>Märkte</b></sd-navigation-item
          ><sd-navigation-item><b>Presseservice</b></sd-navigation-item>
        </div>
        <!-- bottom-left-area end !-->
        <!-- bottom-right-area start !-->
        <div class="-mr-4 flex items-center">
          <sd-navigation-item>
            <div class="w-4 h-4 flex items-center">
              <sd-icon
                title="Unsere weiteren Auftritte"
                name="system/website"
                library="global-resources"
                class="text-xl absolute -ml-[4px]"
              ></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
            <div class="w-4 h-4 flex items-center">
              <sd-icon
                title="Suche"
                name="system/magnifying-glass"
                library="global-resources"
                class="text-xl absolute -ml-[4px]"
              ></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
            <div class="flex items-center gap-2">
              <sd-icon name="system/profile" library="global-resources" class="text-xl"></sd-icon
              ><span>Mein Depot</span>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
            <div class="flex items-center gap-2">
              <sd-icon name="system/lock-locked" library="global-resources" class="text-xl"></sd-icon
              ><span>Meine Bewerbung</span>
            </div>
          </sd-navigation-item>
          <!-- bottom-right-area end !-->
        </div>
      </div>
    </sd-header>
  `
};
