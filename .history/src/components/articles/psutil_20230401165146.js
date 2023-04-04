function PsutilArticle() {
    return (

<div>
<p><h1>Check the temperature of your CPU using Python (and other cool tricks)</h1></p>

<p class="has-small-font-size"><em>Written by Ori Roza</em></p>

<figure id="5b34" class="graf graf--figure graf-after--h3">
<div class="aspectRatioPlaceholder is-locked">
<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*Gx9zzO6SmaEn8btnqGxhGw.png" data-width="300" data-height="300" data-is-featured="true" data-scroll="native"> </div>
</div>
</figure>
<p id="81e6" class="graf graf--p graf-after--figure">Python’s <a class="markup--anchor markup--p-anchor" href="https://psutil.readthedocs.io/en/latest/" target="_blank" rel="noopener" data-href="https://psutil.readthedocs.io/en/latest/">psutil module</a> provides an interface with all the PC resources and processes.</p>
<p id="6929" class="graf graf--p graf-after--p">This module is very helpful whether we want to get some data on a specific resource or manage a resource according to its state.</p>
<p id="9b3e" class="graf graf--p graf-after--p">In this article, I will show you the main features of this module and how to use them.</p>
<h3 id="63a3" class="graf graf--h3 graf-after--p"><strong class="markup--strong markup--h3-strong">Getting PC resources information</strong></h3>
<p id="a96d" class="graf graf--p graf-after--h3">Let’s see how we can get some info about our PC’s current system state.</p>
<p id="7da3" class="graf graf--p graf-after--p">We can get some info about the CPU since boot time, including how many <a class="markup--anchor markup--p-anchor" href="https://www.geeksforgeeks.org/operating-system-introduction-system-call/" target="_blank" rel="noopener" data-href="https://www.geeksforgeeks.org/operating-system-introduction-system-call/">system calls</a> and <a class="markup--anchor markup--p-anchor" href="http://www.linfo.org/context_switch.html" target="_blank" rel="noopener" data-href="http://www.linfo.org/context_switch.html">context switches</a> it has made:</p>
<pre id="93b9" class="graf graf--pre graf-after--p">In [1]: psutil.cpu_stats()
Out[1]: scpustats(
ctx_switches=437905181,
interrupts=2222556355L,
soft_interrupts=0,
syscalls=109468308)</pre>
<p id="28a8" class="graf graf--p graf-after--pre">We can get some info about the disk and the memory state:</p>
<pre id="97c8" class="graf graf--pre graf-after--p">In [1]: psutil.disk_usage("c:")Out[1]: sdiskusage(total=127950385152L,
                   used=116934914048L,
                   free=11015471104L,
                   percent=91.4)</pre>
<pre id="de21" class="graf graf--pre graf-after--pre">In [2]: psutil.virtual_memory()
Out[2]: svmem(total=8488030208L,
              available=3647520768L,
              percent=57.0,
              used=4840509440L,
              free=3647520768L)</pre>
<p id="2e84" class="graf graf--p graf-after--pre">We can even get some physical information about how many seconds of battery life is left, or the current CPU temperature:</p>
<pre id="1854" class="graf graf--pre graf-after--p">In [1]: psutil.sensors_battery()
Out[1]: sbattery(percent=77, secsleft=18305, power_plugged=False)</pre>
<pre id="2385" class="graf graf--pre graf-after--pre">In [2]: psutil.sensors_temperatures() # In Celsius
Out[2]: {"{'ACPI\\ThermalZone\\THM0_0':  [shwtemp(label='',  current=49.05000000000001, high=127.05000000000001, critical=127.05000000000001)]}"}

</pre>
<h3 id="a942" class="graf graf--h3 graf-after--pre"><strong class="markup--strong markup--h3-strong">Getting Information about Processes</strong></h3>
<p id="1142" class="graf graf--p graf-after--h3">One of the most powerful features this module provides us is the “Process” class. We can access each process’ resources and statistics and respond accordingly.</p>
<p id="73b7" class="graf graf--p graf-after--p">(There are processes that require some admin or system privileges, so after trying to access their instance it will fail with an “AccessDenied” error.)</p>
<p id="eec1" class="graf graf--p graf-after--p">Let’s check this feature out.</p>
<p id="1ed7" class="graf graf--p graf-after--p">First, we create an instance by giving the wanted process ID:</p>
<pre id="eec0" class="graf graf--pre graf-after--p">In [1]: p = psutil.Process(9800)</pre>
<p id="3604" class="graf graf--p graf-after--pre">Then, we can access all the information and statistics of the process:</p>
<pre id="eeb9" class="graf graf--pre graf-after--p">In [1]: p.exe()
Out[1]: 'C:\\Windows\\System32\\dllhost.exe'</pre>
<pre id="397c" class="graf graf--pre graf-after--pre">In [2]: p.cpu_percent()
Out[2]: 0.0</pre>
<pre id="108f" class="graf graf--pre graf-after--pre">In [3]: p.cwd()
Out[3]: 'C:\\WINDOWS\\system32'</pre>
<p id="2c94" class="graf graf--p graf-after--pre">Let’s create a function that links open connections ports to processes.</p>
<p id="94ef" class="graf graf--p graf-after--p">First, we need to iterate all the open connections. <code class="markup--code markup--p-code">ps.net_connections</code> is exactly what we need!</p>
<pre id="de9e" class="graf graf--pre graf-after--p">
In [1]: ps.net_connections?{"\n"}
Signature: ps.net_connections(kind='inet'){"\n"}
Docstring:{"\n"}
Return system-wide socket connections as a list of{"\n"}
(fd, family, type, laddr, raddr, status, pid) namedtuples.{"\n"}
In case of limited privileges 'fd' and 'pid' may be set to -1{"\n"}
and None respectively.{"\n"}
The *kind* parameter filters for connections that fit the following criteria:</pre>
<pre id="3d78" class="graf graf--pre graf-after--pre">
+------------+----------------------------------------------------+{"\n"}
| Kind Value | Connections using                                  |{"\n"}
+------------+----------------------------------------------------+{"\n"}
| inet       | IPv4 and IPv6                                      |{"\n"}
| inet4      | IPv4                                               |{"\n"}
| inet6      | IPv6                                               |{"\n"}
| tcp        | TCP                                                |{"\n"}
| tcp4       | TCP over IPv4                                      |{"\n"}
| tcp6       | TCP over IPv6                                      |{"\n"}
| udp        | UDP                                                |{"\n"}
| udp4       | UDP over IPv4                                      |{"\n"}
| udp6       | UDP over IPv6                                      |{"\n"}
| unix       | UNIX socket (both UDP and TCP protocols)           |{"\n"}
| all        | the sum of all the possible families and protocols |{"\n"}
+------------+----------------------------------------------------+"{"\n"}</pre>
<p id="cb69" class="graf graf--p graf-after--pre">We can see that one of the attributes that net_connections returns is “pid”.</p>
<p id="2f68" class="graf graf--p graf-after--p">We can link this to a process name:</p>
<pre id="4588" class="graf graf--pre graf-after--p">
    In [1]: def link_connection_to_process(): {"\n"}
    ...:     for connection in ps.net_connections():
    ...:         try:
    ...:             yield [ps.Process(pid=connection.pid).name(),
    ...:                   connection]
    ...:         except ps.AccessDenied:
    ...:             continue # Keep going if we don't have access</pre>
<p id="1b61" class="graf graf--p graf-after--pre">We should remember that unless we’ve got some root privileges, we cannot access particular processes. Therefore we need to wrap it in a try-catch statement for handling an “AccessDenied” error.</p>
<p id="4456" class="graf graf--p graf-after--p">Let’s check the output.</p>
<p id="1c0a" class="graf graf--p graf-after--p">It will output a lot of data, so let’s print the first member:</p>
<pre id="15e5" class="graf graf--pre graf-after--p">In [1]: for proc_to_con in ps.net_connections():
    ...:     print proc_to_con
    ...:     raw_input("...")
    ...:
['ManagementServer.exe', sconn(fd=-1, family=2, type=1, laddr=addr(ip='127.0.0.1', port=5905), raddr=addr(ip='127.0.0.1', port=49728), status='ESTABLISHED', pid=5224)]
...</pre>
<p id="f6cd" class="graf graf--p graf-after--pre">As we can see, the first member is the process name and the second is the connection data: ip address, port, status and so on.</p>
<p id="3773" class="graf graf--p graf-after--p">This function is very useful to explore which ports are used by each processes.</p>
<p id="d8ea" class="graf graf--p graf-after--p">We’ve all gotten the error “This address is already in use” once, haven’t we?</p>
<h3 id="ea5e" class="graf graf--h3 graf-after--p">Conclusion</h3>
<p id="dfb5" class="graf graf--p graf-after--h3">The psutil module is a great library for system management. It is useful for managing resources as a part of a code flow.</p>
<p id="7862" class="graf graf--p graf-after--p graf--trailing">I hope this article taught you something new, and I am looking forward to your feedback. Please, do tell — was this useful for you?</p>





</div>



    );
  }
  
  export default PsutilArticle;