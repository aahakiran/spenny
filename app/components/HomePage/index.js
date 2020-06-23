import React from 'react';
import {Goto, Expenses, CardBalance, Balance, BalanceWrapper, Rect, RectWrapper, MonthWrapper, Month, Monthly, SpendingBreakdown, Card, SpendingImg, CardText, CardSubText, FlexBox, Wrapper, Amt } from './skins';
import input from '../../images/input-24px.svg';
import cart from '../../images/shopping_cart-24px.svg';
import arrowUp from '../../images/arrow_upward-24px.svg';
import arrowDown from '../../images/arrow_downward-24px.svg';
import arrow from '../../images/down-arrow-black-icon.svg';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Chart} from './Chart';
import dayjs from 'dayjs';


export function HomePage(props) {
    const { graphData: { data:{ cardBalance, month, spending } } } = props;
    return (
        <Wrapper>
            <Expenses>
                <FormattedMessage {...messages.expenses} />
                <Goto src={input}/>
            </Expenses>
            <BalanceWrapper>
                <div>
                    <CardBalance><FormattedMessage {...messages.cardBalance} /></CardBalance>
                    <Balance>${cardBalance}</Balance>
                </div>
                <div>
                    <RectWrapper color={'#1bc773'}>
                        <Rect color={'#e2f2eb'} ><img src={arrowUp} /></Rect>
                        <span>$3,212</span>
                    </RectWrapper>
                    <RectWrapper color={'#f24750'}>
                        <Rect color={'#f6e6e7'} ><img src={arrowDown} /></Rect>
                        <span>$1,168</span>
                    </RectWrapper>
                </div>
            </BalanceWrapper>
            <MonthWrapper>
                <Monthly>Monthly<img src={arrow}/></Monthly>
                {
                    month && month.map( (item, index) => {
                        return <Month key={'k'+index} highlight={index===0}>{item}</Month>
                    })
                }
            </MonthWrapper>

            <Chart {...props}/>

            <div>
               <SpendingBreakdown>
                   <FormattedMessage {...messages.spendingBreakdown} />
                </SpendingBreakdown>
                {spending && spending.map( (val, index) => {
                        return <Card key={'k'+index}>
                            <FlexBox>
                                <SpendingImg><img src={cart}/></SpendingImg>
                                <div>
                                    <CardText>{Object.keys(val)[0]}</CardText>
                                    <CardSubText>
                                        {dayjs(parseInt(val.date)).format('DD dddd MMMM')}
                                    </CardSubText>
                                </div>
                            </FlexBox>
                            <div><Amt>{"-$"+val[Object.keys(val)[0]]}</Amt></div>
                        </Card>
                })
                    
                }
            </div>

        </Wrapper>
    )
}
