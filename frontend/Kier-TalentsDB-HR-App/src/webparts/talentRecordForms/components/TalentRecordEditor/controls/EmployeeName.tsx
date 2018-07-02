import * as React from 'react';

import {inject, observer} from "mobx-react";
import UserRemoteSelect from "./UserSelector";
import {Input} from 'antd';

@inject("store", "context")
@observer
class EmployeeName extends React.Component<any, any> {

  render() {

    const options = {
      initialValue: this.props.store.Talent.FullName,
      rules: [{required: true, message: this.props.validationMessage}]
    }


    const element = (this.props.store.ViewStore.isEditing && this.props.item.value == "") ? this.props.form.getFieldDecorator(this.props.controlId, options)(
      <Input size="small" placeholder="Employee Name" disabled={this.props.disabled}/>) :
      <UserRemoteSelect changed={this.props.changed} item={this.props.store.Talent.Name}
                        validationMessage={this.props.validationMessage} form={this.props.form}
                        controlId={this.props.controlId} required={true} disabled={this.props.disabled}/>

    return (element);
  }
}


export default EmployeeName;



