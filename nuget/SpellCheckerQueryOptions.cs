using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SpellChecker
{
    /// <summary>
    /// Query options for the Spell Checker API
    /// </summary>
    public class SpellCheckerQueryOptions
    {
        /// <summary>
        /// The text to check the spelling of
        /// Example: The quick brown fox jumps over the lazy dog
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
