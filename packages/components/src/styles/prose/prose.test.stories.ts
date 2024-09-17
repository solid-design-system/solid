import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-prose');
const { overrideArgs } = storybookHelpers('sd-prose');
const { generateTemplate } = storybookTemplate('sd-prose');

// HTML helper to get syntax highlighting and formatting in the template string
const html = String.raw;

/**
 * The `sd-prose` style is used to to add  typographic defaults to any vanilla HTML you don’t control, like HTML rendered from Markdown, or pulled from a CMS.
 */

export default {
  title: 'Styles/sd-prose/Screenshots: sd-prose',
  tags: ['!autodocs'],
  component: 'sd-prose',
  parameters: {
    ...parameters,
    docs: { story: { inline: false, height: 'calc(100vh - 400px)' } }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: '' }),
  argTypes
};

const content = html`<h1>Solid Prose</h1>
  <p>
    Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a
    keen eye for typography and a lot of complex custom CSS.
  </p>
  <p>
    By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends
    up being really useful for building application UIs because you spend less time undoing user-agent styles, but when
    you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it
    can be surprising and unintuitive.
  </p>
  <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
  <blockquote>
    <p>Why do we need so many classes with TailwindCSS?</p>
  </blockquote>
  <p>Or as you say in German:</p>
  <blockquote lang="de"><p>Was zum Kuckuck?</p></blockquote>
  <p>
    We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want
    to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And
    I doubt you really want your blog posts to use the user-agent styles either — you want them to look awesome, not
    awful.
  </p>
  <p>
    The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you actually want, without any of
    the downsides of doing something stupid like disabling our base styles.
  </p>
  <p>
    It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a
    beautiful, well-formatted document:
  </p>
  <pre><code class="language-html">&lt;article class="prose"&gt;
  &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
  &lt;p&gt;
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  &lt;/p&gt;
  &lt;p&gt;
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  &lt;/p&gt;
  &lt;!-- ... --&gt;
&lt;/article&gt;
</code></pre>
  <p>
    For more information about how to use the plugin and the features it includes,
    <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.
  </p>
  <hr />
  <h2>What to expect from here on out</h2>
  <p>
    What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes
    every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered
    lists, code blocks, block quotes, and even italics.
  </p>
  <p>It's important to cover all of these use cases for a few reasons:</p>
  <ol>
    <li>We want everything to look good out of the box.</li>
    <li>Really just the first reason, that's the whole point of the plugin.</li>
    <li>
      Here's a third pretend reason though a list with three items looks more realistic than a list with two items.
    </li>
  </ol>
  <p>Now we're going to try out another header style.</p>
  <h3>Typography should be easy</h3>
  <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
  <p>Something a wise person once told me about typography is:</p>
  <blockquote>
    <p>Make typography good then it won't be bad.</p>
  </blockquote>
  <p>It's probably important that images look okay here by default as well:</p>
  <figure>
    <img src="./placeholders/images/architecture.jpg" alt="" />
    <figcaption>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old.
    </figcaption>
  </figure>
  <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>
  <ul>
    <li>So here is the first item in this list.</li>
    <li>In this example we're keeping the items short.</li>
    <li>Later, we'll use longer, more complex list items.</li>
  </ul>
  <p>And that's the end of this section.</p>
  <h2>What if we stack headings?</h2>
  <h3>We should make sure that looks good, too.</h3>
  <p>
    Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on
    the second heading because it usually looks better for the headings to be closer together than a paragraph followed
    by a heading should be.
  </p>
  <h3>When a heading comes after a paragraph …</h3>
  <p>
    When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what
    a more complex list would look like.
  </p>
  <ul>
    <li>
      <p>I often do this thing where list items have headings.</p>
      <p>
        For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles
        right.
      </p>
      <p>
        I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between
        the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could
        make a strong argument that you just shouldn't write this way.
      </p>
    </li>
    <li>
      <p>Since this is a list, I need at least two items.</p>
      <p>
        I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one
        item, and we really want this to look realistic. That's why I've added this second list item so I actually have
        something to look at when writing the styles.
      </p>
    </li>
    <li>
      <p>It's not a bad idea to add a third item either.</p>
      <p>
        I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem
        to be having no trouble making up arbitrary things to type, I might as well include it.
      </p>
    </li>
  </ul>
  <p>
    After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right
    to a heading.
  </p>
  <h2>Code should look okay by default.</h2>
  <p>
    I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or
    <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks but it wouldn't hurt
    to make them look okay out of the box, even with no syntax highlighting.
  </p>
  <p>Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p>
  <pre><code class="language-js">module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
</code></pre>
  <p>Hopefully that looks good enough to you.</p>
  <h3>What about nested lists?</h3>
  <p>
    Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since
    some of you goofballs are going to do it we have to carry the burden of at least making it work.
  </p>
  <ol>
    <li>
      Nested lists are rarely a good idea.
      <ul>
        <li>
          You might feel like you are being really "organized" or something but you are just creating a gross shape on
          the screen that is hard to read.
        </li>
        <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
        <li>Nesting tons of folders in your source code is also not helpful.</li>
      </ul>
    </li>
    <li>
      Since we need to have more items, here's another one.
      <ul>
        <li>I'm not sure if we'll bother styling more than two levels deep.</li>
        <li>Two is already too much, three is guaranteed to be a bad idea.</li>
        <li>If you nest four levels deep you belong in prison.</li>
      </ul>
    </li>
    <li>
      Two items isn't really a list, three is good though.
      <ul>
        <li>Again please don't nest lists if you want people to actually read your content.</li>
        <li>Nobody wants to look at this.</li>
        <li>I'm upset that we even have to bother styling this.</li>
      </ul>
    </li>
  </ol>
  <p>
    The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren't given a child
    <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about
    styling that annoying situation too.
  </p>
  <ul>
    <li>
      <p>For example, here's another nested list.</p>
      <p>But this time with a second paragraph.</p>
      <ul>
        <li>These list items won't have <code>&lt;p&gt;</code> tags</li>
        <li>Because they are only one line each</li>
      </ul>
    </li>
    <li>
      <p>But in this second top-level list item, they will.</p>
      <p>This is especially annoying because of the spacing on this paragraph.</p>
      <ul>
        <li>
          <p>
            As you can see here, because I've added a second line, this list item now has a
            <code>&lt;p&gt;</code> tag.
          </p>
          <p>This is the second line I'm talking about by the way.</p>
        </li>
        <li><p>Finally here's another list item so it's more like a list.</p></li>
      </ul>
    </li>
    <li><p>A closing list item, but with no nested list, because why not?</p></li>
  </ul>
  <p>And finally a sentence to close off this section.</p>
  <h2>There are other elements we need to style</h2>
  <p>
    I almost forgot to mention links, like
    <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>. We almost made them blue but that's so
    yesterday, so we went with dark gray, feels edgier.
  </p>
  <p>We even included table styles as long as you do not use <code>.sd-prose--inverted</code>, check it out:</p>
  <table>
    <thead>
      <tr>
        <th>Wrestler</th>
        <th>Origin</th>
        <th>Finisher</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bret "The Hitman" Hart</td>
        <td>Calgary, AB</td>
        <td>Sharpshooter</td>
      </tr>
      <tr>
        <td>Stone Cold Steve Austin</td>
        <td>Austin, TX</td>
        <td>Stone Cold Stunner</td>
      </tr>
      <tr>
        <td>Randy Savage</td>
        <td>Sarasota, FL</td>
        <td>Elbow Drop</td>
      </tr>
      <tr>
        <td>Vader</td>
        <td>Boulder, CO</td>
        <td>Vader Bomb</td>
      </tr>
      <tr>
        <td>Razor Ramon</td>
        <td>Chuluota, FL</td>
        <td>Razor's Edge</td>
      </tr>
    </tbody>
  </table>
  <p>
    We also need to make sure inline code looks good, like if I wanted to talk about
    <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.
  </p>
  <h3>Sometimes I even use <code>code</code> in headings</h3>
  <p>Even though it's probably a bad idea, and historically I've had a hard time making it look good.</p>
  <p>
    Another thing I've done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you
    about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository.
  </p>
  <h4>We haven't used an <code>h4</code> yet</h4>
  <h5>And a <code>h5</code>neither</h5>
  <p>
    But now we have. Please don't use <code>h6</code> in your content, Medium only supports two heading levels for a
    reason, you animals. We honestly considered using a <code>before</code> pseudo-element to scream at you if you use
    <code>h6</code>.
  </p>
  <p>
    We don't style <code>h6</code> at all out of the box because <code>h5</code> elements are already so small that they
    are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it smaller than the
    body copy? No thanks.
  </p>
  <h3>We still need to think about stacked headings though.</h3>
  <h4>Let's make sure we don't screw that up with <code>h4</code> elements, either.</h4>
  <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>
  <p>
    Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want
    things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a
    heading too close to the end of the document.
  </p>
  <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>`;

const sample = html`<div class="flex flex-col gap-32">
  <!-- sd-prose/sample-h1 -->
  <div class="sd-prose">
    <h1>H1 Nisi eu excepteur anim esse</h1>
  </div>
  <!-- sd-prose/sample-h2 -->
  <div class="sd-prose">
    <h2>H2 Nisi eu excepteur anim esse</h2>
  </div>
  <!-- sd-prose/sample-h3 -->
  <div class="sd-prose">
    <h3>H3 Nisi eu excepteur anim esse</h3>
  </div>
  <!-- sd-prose/sample-h4 -->
  <div class="sd-prose">
    <h4>H4 Nisi eu excepteur anim esse</h4>
  </div>
  <!-- sd-prose/sample-h5 -->
  <div class="sd-prose">
    <h5>H5 Nisi eu excepteur anim esse</h5>
  </div>
  <!-- sd-prose/sample-paragraph -->
  <div class="sd-prose">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
  </div>
  <!-- sd-prose/sample-paragraph-strong -->
  <div class="sd-prose">
    <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></p>
  </div>
  <!-- sd-prose/sample-inline -->
  <div class="sd-prose">
    <a href="#">Inline link</a>
  </div>
  <!-- sd-prose/sample-inline-link-strong -->
  <div class="sd-prose">
    <a href="#"><strong>Inline link</strong></a>
  </div>
  <!-- sd-prose/sample-list-unordered -->
  <div class="sd-prose">
    <ul>
      <li>Unordered list level 1</li>
      <li>Unordered list level 1</li>
      <li>Unordered list level 1</li>
    </ul>
  </div>
  <!-- sd-prose/sample-list-ordered -->
  <div class="sd-prose">
    <ol>
      <li>Ordered list level 1</li>
      <li>Ordered list level 1</li>
      <li>Ordered list level 1</li>
    </ol>
  </div>
  <!-- sd-prose/sample-list-ordered-nested -->
  <div class="sd-prose">
    <ol>
      <li>
        Ordered list level 1
        <ol>
          <li>Ordered list level 2</li>
          <li>Ordered list level 2</li>
        </ol>
      </li>
      <li>
        Ordered list level 1
        <ol>
          <li>Ordered list level 2</li>
          <li>Ordered list level 2</li>
          <li>Ordered list level 2</li>
        </ol>
      </li>
    </ol>
  </div>
  <!-- sd-prose/sample-media -->
  <div class="sd-prose">
    <figure>
      <img src="./placeholders/images/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover" />
      <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</figcaption>
    </figure>
  </div>
  <!-- sd-prose/sample-image-p -->
  <div class="sd-prose">
    <img src="./placeholders/images/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
  </div>
  <!-- sd-prose/sample-quote -->
  <div class="sd-prose">
    <blockquote>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
    </blockquote>
  </div>
  <!-- sd-prose/sample-table -->
  <div class="sd-prose">
    <table>
      <thead>
        <tr>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
        </tr>
        <tr>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
        </tr>
        <tr>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- sd-prose/sample-divider -->
  <div class="sd-prose"><hr /></div>
  <!-- sd-prose/sample-h2-h3 -->
  <div class="sd-prose">
    <h2>H2 Nisi eu excepteur anim esse</h2>
    <h3>H3 Nisi eu excepteur anim esse lorem ipsum sic semper</h3>
  </div>
  <!-- sd-prose/sample-h3-h4 -->
  <div class="sd-prose">
    <h3>H3 Nisi eu excepteur anim esse</h3>
    <h4>H4 Nisi eu excepteur anim esse</h4>
  </div>
  <!-- sd-prose/sample-h4-h5 -->
  <div class="sd-prose">
    <h4>H4 Nisi eu excepteur anim esse</h4>
    <h5>H5 Nisi eu excepteur anim esse</h5>
  </div>
  <!-- sd-prose/sample-h2-paragraph -->
  <div class="sd-prose">
    <h2>H2 Nisi eu excepteur anim esse</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
  </div>
  <!-- sd-prose/sample-h2-paragraph-h3-paragraph -->
  <div class="sd-prose">
    <h2>H2 Nisi eu excepteur anim esse</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <h3>H3 Nisi eu excepteur anim esse</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellusnon
      orci <a href="#">inline link goes here</a> pe dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non
      tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
  </div>
  <!-- sd-prose/sample-paragraph-group -->
  <div class="sd-prose">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellusnon
      orci <a href="#">inline link goes here</a> pe dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non
      tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
  </div>
  <!-- sd-prose/sample-image-caption-paragraph -->
  <div class="sd-prose">
    <figure>
      <img src="./placeholders/images/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover" />
      <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</figcaption>
    </figure>
    <p>
      <strong>DD. Month Year – </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper
      odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit
      neque tristique. Facilisis commodo integer hendrerit tortor.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellusnon
      orci <a href="#">inline link goes here</a> pe dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non
      tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
  </div>
  <!-- sd-prose/sample-h2-paragraph-h3-paragraph-quote -->
  <div class="sd-prose">
    <h2>H2 Nisi eu excepteur anim esse</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <h3>H3 Nisi eu excepteur anim esse</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellusnon
      orci <a href="#">inline link goes here</a> pe dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non
      tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
    </p>
    <blockquote>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
    </blockquote>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
  </div>
  <!-- sd-prose/sample-h2-paragraph-h3-paragraph-table -->
  <div class="sd-prose">
    <h2>H2 Nisi eu excepteur anim esse</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <h3>H3 Nisi eu excepteur anim esse</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <table>
      <thead>
        <tr>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
        </tr>
        <tr>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
        </tr>
        <tr>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
        </tr>
      </tbody>
    </table>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <!-- sd-prose/sample-h2-p-h3-h4-p-divider -->
  <div class="sd-prose">
    <h2>H2 Nisi eu excepteur anim esse</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <h3>H3 Nisi eu excepteur anim esse</h3>
    <h4>H4 Nisi eu excepteur anim esse</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <hr />
    <p>Lorem: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <!-- sd-prose/sample-h2-p-h3-h4-p-h5-p-h5-p -->
  <div class="sd-prose">
    <h2>H2 Nisi eu excepteur anim esse</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <h3>H3 Nisi eu excepteur anim esse</h3>
    <h4>H4 Nisi eu excepteur anim esse</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <h5>H5 Nisi eu excepteur anim esse</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <h5>H5 Nisi eu excepteur anim esse</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
  </div>
  <!-- sd-prose/sample-h2-p-h3-p-h4-p-h5-p -->
  <div class="sd-prose">
    <h2>H2 Nisi eu excepteur anim esse</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <h3>H3 Nisi eu excepteur anim esse</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <h4>H4 Nisi eu excepteur anim esse</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
    <h5>H5 Nisi eu excepteur anim esse</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui
      vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo
      integer hendrerit tortor.
    </p>
  </div>
</div>`;

export const Default = {
  name: 'Default',
  render: (args: { [k: string]: any }) => {
    return generateTemplate({
      options: {
        templateContent: html` <div
          class="sd-container ${args['sd-prose--inverted-attr'] === true
            ? 'sd-container--variant-primary'
            : 'sd-container--variant-white'}"
        >
          <div class="%CLASSES%">${args['default-slot'] || content}</div>
        </div>`
      },
      args
    });
  }
};

export const Inverted = {
  chromatic: { disableSnapshot: false }, // We have to explicitly enable snapshots for these stories as it fails otherwise because it would be too big
  name: 'Inverted',
  render: (args: { [k: string]: any }) => {
    return generateTemplate({
      axis: {
        x: [{ type: 'attribute', name: 'sd-prose--inverted', values: [false, true] }]
      },
      options: {
        templateContent: html` <div class="p-4">
          <style>
            .sd-prose--inverted table {
              opacity: 0;
            }
          </style>
          <div class="%CLASSES%">${args['default-slot'] || content}</div>
        </div>`,
        templateBackgrounds: { alternate: 'x', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    });
  }
};

export const Samples = {
  chromatic: { disableSnapshot: false }, // We have to explicitly enable snapshots for these stories as it fails otherwise because it would be too big
  name: 'Samples',
  render: (args: { [k: string]: any }) => {
    return generateTemplate({
      options: {
        templateContent: html`<div>${sample}</div>`
      },
      args
    });
  }
};
