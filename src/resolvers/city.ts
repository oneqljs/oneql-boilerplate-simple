// import SOA from '../util/soa'
import cityMockData from '../api/mockdata/city'

interface CityRequest {
  key?: String
  ext?: String
}

const cityResolvers = {
  Query: {
    city: async (_root, arg, _context) => {
      const { key, ext }: CityRequest = arg.request || {}
      
      console.log('context city ---', _context.ctx.suffix)

      let response
      try {
        var param = {
          key,
          ext
        }
        console.log('city param - ', param)
        // response = await SOA('13555', 'airportFuzzySearch', param)

        response = cityMockData

      } catch (error) {
        response = {
          error
        }
      }
      if (response.dataInfo) {
      }

      return response
    }
  }
}

export default cityResolvers
