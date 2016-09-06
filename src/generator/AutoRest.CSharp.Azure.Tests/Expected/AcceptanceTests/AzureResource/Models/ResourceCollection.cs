// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
// 
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

namespace Fixtures.Azure.AcceptanceTestsAzureResource.Models
{
    using System.Linq;

    public partial class ResourceCollection
    {
        /// <summary>
        /// Initializes a new instance of the ResourceCollection class.
        /// </summary>
        public ResourceCollection() { }

        /// <summary>
        /// Initializes a new instance of the ResourceCollection class.
        /// </summary>
        public ResourceCollection(FlattenedProduct productresource = default(FlattenedProduct), System.Collections.Generic.IList<FlattenedProduct> arrayofresources = default(System.Collections.Generic.IList<FlattenedProduct>), System.Collections.Generic.IDictionary<string, FlattenedProduct> dictionaryofresources = default(System.Collections.Generic.IDictionary<string, FlattenedProduct>))
        {
            Productresource = productresource;
            Arrayofresources = arrayofresources;
            Dictionaryofresources = dictionaryofresources;
        }

        /// <summary>
        /// </summary>
        [Newtonsoft.Json.JsonProperty(PropertyName = "productresource")]
        public FlattenedProduct Productresource { get; set; }

        /// <summary>
        /// </summary>
        [Newtonsoft.Json.JsonProperty(PropertyName = "arrayofresources")]
        public System.Collections.Generic.IList<FlattenedProduct> Arrayofresources { get; set; }

        /// <summary>
        /// </summary>
        [Newtonsoft.Json.JsonProperty(PropertyName = "dictionaryofresources")]
        public System.Collections.Generic.IDictionary<string, FlattenedProduct> Dictionaryofresources { get; set; }

    }
}