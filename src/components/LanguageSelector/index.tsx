import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Language } from 'store/interface';
import { setLanguage } from 'store/slice';
import { RootState } from 'store/store';
import { LanguageSelectorProps } from './interface';


class LanguageSelector extends Component<LanguageSelectorProps> {
    
    handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value as Language;
    this.props.setLanguage(selectedLanguage);
};

render() {
    return (
    <select value={this.props.language} onChange={this.handleChange}>
        <option value={Language.Russian}>Русский</option>
        <option value={Language.English}>English</option>
    </select>
    );
}
}

const mapStateToProps = (state: RootState) => ({
    language: state.reviews.language,
});

const mapDispatchToProps = {
    setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
