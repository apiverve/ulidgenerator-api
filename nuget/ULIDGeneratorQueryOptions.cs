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
        /// Number of ULIDs to generate
        /// </summary>
        [JsonProperty("count")]
        public int? Count { get; set; }

        /// <summary>
        /// Custom timestamp in milliseconds (optional, uses current time if not specified)
        /// </summary>
        [JsonProperty("timestamp")]
        public int? Timestamp { get; set; }
    }
}
