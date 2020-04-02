import { shallowMount } from '@vue/test-utils'
import NiftyButton from '@/components/NiftyButton/NiftyButton.vue'

describe('NiftyButton.vue', () => {
    it('shows text of props.label in Button when passed', () => {
        const label = 'Whack';
        const wrapper = shallowMount(NiftyButton, {
            propsData: { label }
        });
        expect(wrapper.text()).toMatch(label);
    });

    it('should call the function passed in props.clickEvent when button clicked', () => {
        const clickEvent = jest.fn();
        const wrapper = shallowMount(NiftyButton, {
            propsData: { clickEvent }
        });

        wrapper.find('button').trigger('click');
        expect(clickEvent.mock.calls.length).toEqual(1);
    });
});
