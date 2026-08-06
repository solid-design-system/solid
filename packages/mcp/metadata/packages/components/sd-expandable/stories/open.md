Use the `open` attribute to set the state of the expandable.

```html
<div class="flex flex-col gap-12">
  <sd-expandable>
    <span slot="toggle-open"> Collapse: Learn more about our commitment to diversity </span>
    <span slot="toggle-closed"> Expand: Learn more about our commitment to diversity </span>

    <div class="sd-prose sd-prose--full-width">
      <p>
        For us, diversity equals strength. By taking the views and experiences of a wide range of people into account,
        we provide room for creative solutions and ensure that we are equipped for the future. A diverse and inclusive
        working environment is important to us. We benefit from the perspectives of different genders, age groups,
        educational levels and backgrounds, thus guaranteeing that we are successful together.
      </p>
      <p>
        As a member of the cooperative financial network, diversity and corporate citizenship are an integral part of
        our corporate culture. Our approach is based around interacting with each other, our customers and our partners
        on an equal footing. Our actions are defined by values such as respect, professionalism and collaboration. In
        the true spirit of the cooperative principles, we channel a wide range of strengths in order to be stronger
        together.
      </p>
      <p>
        By signing the Diversity Charter in 2013, Union Investment underlined how highly it values diversity within the
        company. We want to attract and retain the best candidates, irrespective of cultural or social background,
        ethnicity, gender, sexual orientation, disability, religion or age. To do this, we have created a working
        environment that is free of prejudice, where respect is paramount and people can achieve their full potential.
        This is the policy that underpins the actions of our managers and employees.
      </p>
    </div>
  </sd-expandable>
  <sd-expandable open>
    <span slot="toggle-open"> Collapse: Learn more about our commitment to diversity </span>
    <span slot="toggle-closed"> Expand: Learn more about our commitment to diversity </span>

    <div class="sd-prose sd-prose--full-width">
      <p>
        For us, diversity equals strength. By taking the views and experiences of a wide range of people into account,
        we provide room for creative solutions and ensure that we are equipped for the future. A diverse and inclusive
        working environment is important to us. We benefit from the perspectives of different genders, age groups,
        educational levels and backgrounds, thus guaranteeing that we are successful together.
      </p>
      <p>
        As a member of the cooperative financial network, diversity and corporate citizenship are an integral part of
        our corporate culture. Our approach is based around interacting with each other, our customers and our partners
        on an equal footing. Our actions are defined by values such as respect, professionalism and collaboration. In
        the true spirit of the cooperative principles, we channel a wide range of strengths in order to be stronger
        together.
      </p>
      <p>
        By signing the Diversity Charter in 2013, Union Investment underlined how highly it values diversity within the
        company. We want to attract and retain the best candidates, irrespective of cultural or social background,
        ethnicity, gender, sexual orientation, disability, religion or age. To do this, we have created a working
        environment that is free of prejudice, where respect is paramount and people can achieve their full potential.
        This is the policy that underpins the actions of our managers and employees.
      </p>
    </div>
  </sd-expandable>
</div>
```
