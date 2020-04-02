import { shallowMount } from '@vue/test-utils'
import GreatInput from "./GreatInput";

describe('GreatInput.vue', () => {
    it('shows prespecified text', () => {
        const wrapper = shallowMount(GreatInput);
        expect(wrapper.find('input').element.value).toEqual('Rhababer');
    });

    it('changes text in p if input changes', async () => {
        const newText = 'Schnüzzl';
        const wrapper = shallowMount(GreatInput);
        const input = wrapper.find('input');

        expect(input.element.value).toEqual('Rhababer');
        input.setValue(newText);
        expect(input.element.value).toEqual(newText);

        await wrapper.vm.$nextTick();
        const paragraph = wrapper.find('p');
        expect(paragraph.text()).toEqual(newText);
    });
});
