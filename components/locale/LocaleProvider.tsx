import React, { Component } from 'react';
import { LocaleProviderProps } from './PropsType';
import zh_cn from './lang/zh-cn';
// import en from './lang/en';

export const LocaleContext = React.createContext(zh_cn);

class LocaleProvider extends Component<LocaleProviderProps, any> {
  static defaultProps = {
    locale: {},
  };

  render() {
    const { children, locale } = this.props;
    return (
      <LocaleContext.Provider value={locale}>
        {React.Children.only(children)}
      </LocaleContext.Provider>
    );
  }
}

export default LocaleProvider;
