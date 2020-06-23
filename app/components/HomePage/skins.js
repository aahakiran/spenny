import styled from 'styled-components';

export const Expenses = styled.div`
  display: flex;
  height: 28px;
  font-family: Avenir;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.4;
  letter-spacing: 0.39px;
  color: #042c5c;
  justify-content: space-between;
  padding: 24px;
`;

export const Goto = styled.img`
  height: 22px;
`;

export const CardBalance = styled.div`
  font-family: Avenir;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.1px;
  color: #77869e;
`;

export const Balance = styled.p`
  font-family: Avenir;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.85px;
  color: #042c5c;
  margin: 10px auto;
`;

export const BalanceWrapper = styled.div`
  margin: 24px;
  display: flex;
  justify-content: space-between;
`;

export const Rect = styled.div`
border-radius: 8px;
margin: 0 4px 4px 0;
width: 22px;
height: 22px;
background-color: ${props =>props.color && props.color};
`;

export const RectWrapper = styled.div`
display: flex;
> span {
  font-family: Avenir;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.3px;
    color: ${props =>props.color && props.color};
    margin: 5px;
}
`;

export const MonthWrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 24px;
`;

export const Month = styled.div`
  border-radius: 6px;
  background-color: ${props => props.highlight ? '#dfe7f5' : '#fff'};
  padding: 0 5px;
  font-family: Avenir;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.11px;
  color: ${props => props.highlight ? '#0047cc' : '#77869e'};
  display: flex;
  align-items: center;
`;

export const Monthly = styled.div`
  font-family: Avenir;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.11px;
  color: #77869e;
  width: 101px;
  height: 32px;
  border-radius: 18.5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.10);
  background-color: #ffffff;
  text-align: center;
  padding: 8px;
  margin-right: 15px;
  > img {
    height: 14px;
    padding-left: 6px;
  }
`;

export const SpendingBreakdown = styled.p`
  font-family: Avenir;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.4;
  letter-spacing: 0.39px;
  color: #042c5c;
  margin: 24px;
`;

export const Card = styled.div`
  margin: 24px;
  height: 56px;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

export const SpendingImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #ff7e87;
  display: flex;
  justify-content: center;
`;

export const CardText = styled.p`
  font-family: Avenir;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.4px;
  color: #042c5c;
  margin: 5px;
`;

export const CardSubText = styled.p`
  font-family: Avenir-Roman;
  font-size: 13px;
  letter-spacing: 0.27px;
  color: #77869e;
  margin: 5px;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  background-color: #f8f9f9;
  height: 100%;
`;

export const Amt = styled.p`
  font-family: Avenir;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.4px;
  color: #ee5a55;
`;