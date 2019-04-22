import React from 'react';
import { shallow, mount } from '../../enzyme';
import { BoxTableContainer } from '.';
import { EmptyTable, BoxTableRows } from '../../components/BoxTables';
import { Link, MemoryRouter } from 'react-router-dom';
import Loader from '../../components/Loader';

describe('BoxTableContainer', () => {
  it('Should render an empty table', () => {
    const wrapper = shallow(<BoxTableContainer />);

    wrapper.setProps({ boxes: [] });
    expect(wrapper.find(EmptyTable)).toHaveLength(1);
    expect(wrapper.find('.table-header')).toHaveLength(0);
  })

  it('Should render a table populated with one', () => {
    const wrapper = shallow(<BoxTableContainer />);

    wrapper.setProps({ boxes: [{ name: 'qjhwbeq', weight: '10', color: '#555555', destinationCountry: 'Sweden' }] })
    expect(wrapper.find('.table-header')).toHaveLength(1)
    expect(wrapper.find(EmptyTable)).toHaveLength(0)
    expect(wrapper.find(BoxTableRows)).toHaveLength(1)
  })

  it('Link path should be to /addbox', () => {
    const wrapper = mount(<MemoryRouter><BoxTableContainer /></MemoryRouter>);
    expect(wrapper.find(Link).props().to).toEqual('/addbox');
  })

  it('Should render the Loader based on isLoading prop', () => {
    const wrapper = shallow(<BoxTableContainer />);

    // Loader to render when isLoading prop is true
    wrapper.setProps({ boxes: [], isLoading: true })
    expect(wrapper.find(Loader)).toHaveLength(1);
    expect(wrapper.find(EmptyTable)).toHaveLength(0);

    // Loader to NOT render when isLoading prop is false
    wrapper.setProps({ boxes: [], isLoading: false })
    expect(wrapper.find(Loader)).toHaveLength(0);
    expect(wrapper.find(EmptyTable)).toHaveLength(1);
  })
})
