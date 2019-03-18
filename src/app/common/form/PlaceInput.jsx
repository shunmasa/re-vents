import React,{Component} from 'react'
import { Form,Label } from 'semantic-ui-react'
import PlaceAutocomplete from 'react-places-autocomplete'
import Script from 'react-load-script'
const styles ={
    autocompleteContainer:{
        zIndex: 1000
    }
}

class PlaceInput extends Component{
state = {
        scriptLoaded:false
    }
handleScriptLoaded = () => this.setState({scriptLoaded:true});

render(){
    const{options,input,width,onSelect,placeholder,meta:{touched,error}}=this.props
return (
     <Form.Field error={touched && !!error} width={width}>
     <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRkQc6uBwu1nHO_LRYgkoC67K1QjwQ3u8&libraries=places"
    onLoad={this.handleScriptLoaded}
    />
    {this.state.scriptLoaded &&
    <PlaceAutocomplete
     inputProps={{...input,placeholder}}
     options={options}
     onSelect={onSelect}
     styles={styles}
    />}
     </Form.Field>
  )
}
}
export default PlaceInput
