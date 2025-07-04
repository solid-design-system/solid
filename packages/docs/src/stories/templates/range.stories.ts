import '../../../../components/src/solid-components';
import { html } from 'lit';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Range',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Solid-DS-%E2%80%93-Component-Docs?node-id=15911-3947&t=8iWCIgBhk0cwDsb7-0'
    }
  }
};

export const InterestCalculator = {
  render: () =>
    html`<div class="sd-container flex flex-col justify-center">
        <p class="sd-headline sd-headline--size-xl justify-center mb-3 inline text-center">
          Your final amount with <span class="interest-percentage">0%</span> return
        </p>
        <p class="sd-headline sd-headline--size-3xl justify-center"><span class="final-amount">13,000.00</span> EUR</p>

        <sd-range min="0" max="6" step="0.5">
          <div slot="label" class="flex justify-between mb-2 text-sm">
            <p>Low return</p>
            <p>High return</p>
          </div>

          <div slot="scale-ticks" class="flex justify-between">
            <sd-range-tick>0%</sd-range-tick>
            <sd-range-tick>2%</sd-range-tick>
            <sd-range-tick>4%</sd-range-tick>
            <sd-range-tick>6%</sd-range-tick>
          </div>

          <div class="flex justify-between text-sm">
            <p>Less risk</p>
            <p>More risk</p>
          </div>
        </sd-range>

        <div class="flex items-center justify-between gap-8 mt-6">
          <p class="sd-paragraph sd-prose">
            With a monthly savings rate of 100 euros and a one-time deposit of 1,000 euros, you will save a total of
            <span class="saved-amount">13,000.00</span> euros over the next 10 years. With a
            <span class="interest-percentage">0%</span> return, your final amount would be approximately
            <span class="final-amount">13,000.00</span> euros. Try out how you can increase your final amount with a
            higher rate of return.
          </p>
          <sd-icon name="content/hourglass" class="text-[48px] min-w-12 min-h-12 text-primary"></sd-icon>
        </div>
      </div>
      <script type="module">
        const settings = {
          initialDeposit: 1000,
          monthlyContribution: 100,
          years: 10,
          interest: {
            min: 0,
            max: 6
          }
        };

        const format = number =>
          new Intl.NumberFormat('de-DE', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(number);

        const calculateReturns = interest => {
          const { initialDeposit, monthlyContribution, years } = settings;
          const months = years * 12;

          const rate = interest / 100;
          const monthlyRate = rate / 12;

          if (monthlyRate === 0) {
            return (initialDeposit + monthlyContribution * months).toFixed(2);
          }

          const futureValueInitial = initialDeposit * Math.pow(1 + monthlyRate, months);
          const futureValueMonthly = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

          const total = futureValueInitial + futureValueMonthly;
          return total.toFixed(2);
        };

        const updateInterest = value => {
          document.querySelectorAll('.interest-percentage').forEach(element => {
            element.innerHTML = value + '%';
          });
        };

        const updateFinalAmount = value => {
          document.querySelectorAll('.final-amount').forEach(element => {
            element.innerHTML = format(value);
          });
        };

        const updateSavedAmount = value => {
          document.querySelectorAll('.saved-amount').forEach(element => {
            element.innerHTML = format(value);
          });
        };

        updateInterest(0);
        updateSavedAmount(calculateReturns(0));
        updateFinalAmount(calculateReturns(0));

        await Promise.all([customElements.whenDefined('sd-range')]).then(() => {
          const range = document.querySelector('sd-range');
          range.tooltipFormatter = value => value + '%';

          range.addEventListener('sd-input', () => {
            const interest = range.value;
            updateInterest(interest);

            const returns = calculateReturns(interest);
            updateFinalAmount(returns);
          });
        });
      </script> `
};
