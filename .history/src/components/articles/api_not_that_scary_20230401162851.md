<!-- wp:paragraph -->
<p>There are way too many services out there that provide a free API which<br>waits to be adjusted into your favorite language.<br>Also, API services could be generated from any visible data such as Facebook (which I've covered <a rel="noreferrer noopener" aria-label="here (opens in a new tab)" href="https://dapythonista.com/2019/01/14/how-i-found-my-apartment-python-style/" target="_blank">here</a>), Twitter or any public databases.<br>In this article, we'll be focusing on Paypal API service.</p>
<!-- /wp:paragraph -->

<!-- wp:more -->
<!--more-->
<!-- /wp:more -->

<!-- wp:paragraph -->
<p>I assume you guys have minimal experience with some basic Python and basic web concepts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Paypal has a massive <a href="https://github.com/paypal/PayPal-Python-SDK" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">API</a>  but it has no intuitive references for<br>tracking our daily transactions.<br>I mean, they do have a REST API for it, but not officially in Python :)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We're gonna implement a connector to Paypal REST API and<br>implement a parser for the transactions.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Transactions? Huh?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>First, we need to talk a bit about the Paypal transactions API.<br> (We're gonna use Paypal's deprecated API in this article)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Paypal's old API used an <a rel="noreferrer noopener" aria-label="NVP (opens in a new tab)" href="https://developer.paypal.com/docs/api-basics/" target="_blank">NVP</a> method (Name-value pair, basically POST with data).<br> The official API URL is https://api-3t.paypal.com/nvp and our wanted endpoint is "TransactionSearch".<br>As for connecting to this API, we need to <a rel="noreferrer noopener" aria-label=" (opens in a new tab)" href="https://developer.paypal.com/docs/api/overview/" target="_blank">generate</a> a Paypal developer account:<br>a user name, a password and an API signature.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Each transaction contains a lot of attributes; timestamp, payer details, amount status, etc.<br>Here we'll parse the data into dictionaries but the sky is the limit: We can create graphs and calculations from the balances and dates, run the data with database and a lot of great other things!</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Let's try to retrieve some data!</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>According to the <a href="https://developer.paypal.com/docs/archive/express-checkout/gs-transaction/" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">official Paypal documentation</a>, we need to provide the following parameters:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>USER // user-id</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>PWD // password</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>SIGNATURE // API signature</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>VERSION // the release version of the API (we'll use 98.0)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>STARTDATE // Paypal demands at least a start date in this format: "1980-01-01T00:00:00Z"</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Now, to send all this to Paypal's servers, we'll use the <a href="http://requests.readthedocs.io/en/master/(opens in a new tab)" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">Requests</a> package.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>First, let's build the data we want to send.<br> As we use a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST">POST </a><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST" target="_blank" rel="noreferrer noopener" aria-label="request (opens in a new tab)">request</a> we need to provide a URL and a data dictionary:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import requests

params = {
'data':
 {
   'VERSION': '98.0',
   'METHOD': 'TransactionSearch', 
   'USER': 'xxx_api1.xxx.com',
   'PWD': 'XXXXXXXXXXXX',
   'SIGNATURE': 'XXXXXXXXXXXX-XXXXXXXXXXXX',
   'STARTDATE': '2020-01-01T00:00:00Z'
 }, 
  'url': 'https://api-3t.paypal.com/nvp',
  'timeout': 300
}

res = requests.post(**params)</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>GREAT! We've got some data!</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>b'L_TIMESTAMP0=2020%2d03%2d03T03%3a14%3a49Z
&amp;L_TIMESTAMP1=2020%2d03%2d03T01%3a59%3a28Z
&amp;L_TIMESTAMP2=2020%2d03%2d02T23%3a06%3a26Z
&amp;L_TIMESTAMP3=2020%2d03%2d02T05%3a39%3a25Z
&amp;L_TIMESTAMP4=2020%2d03%2d01T11%3a35%3a37Z
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The data we get is given as a string argument (data of type application/x-www-form-urlencoded)<br> To handle it we use <a href="https://docs.python.org/3/library/urllib.parse.html" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">urllib.parse.parse_qs</a>, a function which parses it into one big dictionary:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;class 'dict'&gt;:
 {'L_TIMESTAMP0': &#91;'2020-03-03T03:14:49Z'],
'L_TIMESTAMP1': &#91;'2020-03-03T01:59:28Z'],
'L_TIMESTAMP2': &#91;'2020-03-02T23:06:26Z']
.......}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>now, all attributes with the same index belong to one completed transaction.<br> so, in theory, we want to take all attributes with the same index into one object:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import re

transactions_dict = {}

for t in raw_transactions:
    index = re.findall(r'\d+', t)  # getting the index
    key = str(index&#91;0])

    if key not in transactions_dict:
        transactions_dict&#91;key] = {}

    transaction_property = t&#91;2:len(t) - len(key)]  # extract property
    value = raw_transactions&#91;t]&#91;0]
    transaction_dict&#91;index].update({transaction_property: value})
    </code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The results are:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;class 'dict'&gt;: {'0':
 {'TIMESTAMP': '2020-03-03T03:14:49Z',
 'TIMEZONE': 'GMT',
 'TYPE': 'Payment',
 'EMAIL': 'xxxx@xxxx.com',
 'NAME': 'John Doe',
 'TRANSACTIONID': '111111111111',
 'STATUS': 'Completed',
 'AMT': '12.00', 
 'CURRENCYCODE': 'USD',
 'FEEAMT': '-0.83',
 'NETAMT': '11.17'}</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Conclusion:</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We've learned how to use an API such as Paypal, how to parse this data and use it as we wish.<br> We can add so many features to this code such as graphs, calculation and so many other cool stuff!<br> I hope this article taught you something new, and I am looking forward to your feedback. Please, do tell — was this useful for you?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The full project can be found on Github <a href="https://github.com/Ori-Roza/paypal_transactions_wrapper" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">here</a>.</p>
<!-- /wp:paragraph -->