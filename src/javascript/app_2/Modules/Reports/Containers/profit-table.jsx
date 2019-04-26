import PropTypes                         from 'prop-types';
import { PropTypes as MobxPropTypes }    from 'mobx-react';
import React                             from 'react';
import { withRouter }                    from 'react-router';
import { localize }                      from '_common/localize';
import DataTable                         from 'App/Components/Elements/DataTable';
import { getContractPath }               from 'App/Components/Routes';
import { connect }                       from 'Stores/connect';
import EmptyTradeHistoryMessage          from '../Components/empty-trade-history-message.jsx';
import PlaceholderComponent              from '../Components/placeholder-component.jsx';
import { ReportsMeta }                   from '../Components/reports-meta.jsx';
import { getProfitTableColumnsTemplate } from '../Constants/data-table-constants';

// TODO Add proper messages before the PR
class ProfitTable extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    render () {
        const {
            data,
            is_empty,
            is_loading,
            error,
            handleScroll,
            has_selected_date,
            totals,
        } = this.props;
        if (error) return <p>{error}</p>;

        const columns = getProfitTableColumnsTemplate();

        if (is_loading || is_empty) {
            return (
                <PlaceholderComponent
                    is_loading={is_loading}
                    has_selected_date={has_selected_date}
                    is_empty={is_empty}
                    empty_message_component={EmptyTradeHistoryMessage}
                />
            );
        }

        return (
            <React.Fragment>
                <ReportsMeta
                    i18n_heading={localize('Profit Table')}
                    i18n_message={localize('Vestibulum rutrum quam fringilla tincidunt. Suspendisse nec tortor.')}
                />
                <div className='profit-table profit-table__content'>
                    <DataTable
                        className='profit-table'
                        data_source={data}
                        columns={columns}
                        onScroll={handleScroll}
                        footer={totals}
                        getRowAction={(row_obj) => row_obj.id ? getContractPath(row_obj.id) : undefined}
                        is_empty={is_empty}
                    />
                </div>
            </React.Fragment>
        );
    }
}

ProfitTable.propTypes = {
    data             : MobxPropTypes.arrayOrObservableArray,
    error            : PropTypes.string,
    handleScroll     : PropTypes.func,
    has_selected_date: PropTypes.bool,
    history          : PropTypes.object,
    is_empty         : PropTypes.bool,
    is_loading       : PropTypes.bool,
    onMount          : PropTypes.func,
    onUnmount        : PropTypes.func,
    totals           : PropTypes.object,
};

export default connect(
    ({ modules }) => ({
        data             : modules.profit_table.data,
        error            : modules.profit_table.error,
        handleScroll     : modules.profit_table.handleScroll,
        has_selected_date: modules.profit_table.has_selected_date,
        is_empty         : modules.profit_table.is_empty,
        is_loading       : modules.profit_table.is_loading,
        onMount          : modules.profit_table.onMount,
        onUnmount        : modules.profit_table.onUnmount,
        totals           : modules.profit_table.totals,
    })
)(withRouter(ProfitTable));

