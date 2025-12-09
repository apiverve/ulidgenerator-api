using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.ULIDGenerator
{
    /// <summary>
    /// Query options for the ULID Generator API
    /// </summary>
    public class ULIDGeneratorQueryOptions
    {
        /// <summary>
        /// Number of ULIDs to generate (1-100, default: 1)
        /// Example: 5
        /// </summary>
        [JsonProperty("count")]
        public string Count { get; set; }

        /// <summary>
        /// Custom timestamp in milliseconds (optional, uses current time if not specified)
        /// Example: 1609459200000
        /// </summary>
        [JsonProperty("timestamp")]
        public string Timestamp { get; set; }
    }
}
