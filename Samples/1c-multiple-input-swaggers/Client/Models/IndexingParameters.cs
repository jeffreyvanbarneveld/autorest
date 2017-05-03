// Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

namespace Searchservice.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    /// <summary>
    /// Represents parameters for indexer execution.
    /// </summary>
    public partial class IndexingParameters
    {
        /// <summary>
        /// Initializes a new instance of the IndexingParameters class.
        /// </summary>
        public IndexingParameters()
        {
          CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the IndexingParameters class.
        /// </summary>
        /// <param name="maxFailedItems">Gets or sets the maximum number of
        /// items that can fail indexing for indexer execution to still be
        /// considered successful. -1 means no limit. Default is 0.</param>
        /// <param name="maxFailedItemsPerBatch">Gets or sets the maximum
        /// number of items in a single batch that can fail indexing for the
        /// batch to still be considered successful. -1 means no limit. Default
        /// is 0.</param>
        /// <param name="base64EncodeKeys">Gets or sets whether indexer will
        /// base64-encode all values that are inserted into key field of the
        /// target index. This is needed if keys can contain characters that
        /// are invalid in keys (such as dot '.'). Default is false.</param>
        public IndexingParameters(int? maxFailedItems = default(int?), int? maxFailedItemsPerBatch = default(int?), bool? base64EncodeKeys = default(bool?))
        {
            MaxFailedItems = maxFailedItems;
            MaxFailedItemsPerBatch = maxFailedItemsPerBatch;
            Base64EncodeKeys = base64EncodeKeys;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets the maximum number of items that can fail indexing for
        /// indexer execution to still be considered successful. -1 means no
        /// limit. Default is 0.
        /// </summary>
        [JsonProperty(PropertyName = "maxFailedItems")]
        public int? MaxFailedItems { get; set; }

        /// <summary>
        /// Gets or sets the maximum number of items in a single batch that can
        /// fail indexing for the batch to still be considered successful. -1
        /// means no limit. Default is 0.
        /// </summary>
        [JsonProperty(PropertyName = "maxFailedItemsPerBatch")]
        public int? MaxFailedItemsPerBatch { get; set; }

        /// <summary>
        /// Gets or sets whether indexer will base64-encode all values that are
        /// inserted into key field of the target index. This is needed if keys
        /// can contain characters that are invalid in keys (such as dot '.').
        /// Default is false.
        /// </summary>
        [JsonProperty(PropertyName = "base64EncodeKeys")]
        public bool? Base64EncodeKeys { get; set; }

    }
}