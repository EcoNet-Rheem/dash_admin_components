import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Create a Boostrap 4 tab item.
 */
export default class TabItem extends Component {

	constructor(props) {
        super(props);
    }

	render() {
		const {
			children,
			className,
			active,
			loading_state,
			setProps,
			...otherProps
		} = this.props;

		return(
			<div
				className={classnames(
					'tab-pane container-fluid',
					{'active': active},
					className
				)}
				{...otherProps}
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			>
				{children}
			</div>
		)
	}
}

TabItem.defaultProps = {
	active: false
};

TabItem.propTypes = {

	/**
	* The ID of this component, used to identify dash components
	* in callbacks. The ID needs to be unique across all of the
	* components in an app.
	*/
	id: PropTypes.string,

	/**
	* The children of this component.
	*/
	children: PropTypes.node,

	/**
	* Defines CSS styles which will override styles previously set.
	*/
	style: PropTypes.object,

	/**
	* Often used with CSS to style elements with common properties.
	*/
	className: PropTypes.string,

	/**
	* Apply 'active' style to this component. Default: False.
	*/
	active: PropTypes.bool,

	/**
	* Object that holds the loading state object coming from dash-renderer
	*/
	loading_state: PropTypes.shape({
		/**
		* Determines if the component is loading or not
		*/
		is_loading: PropTypes.bool,
		/**
		* Holds which property is loading
		*/
		prop_name: PropTypes.string,
		/**
		* Holds the name of the component that is loading
		*/
		component_name: PropTypes.string
	}),

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func

};